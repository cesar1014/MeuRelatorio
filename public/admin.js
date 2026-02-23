const state = {
  projects: [],
  users: [],
  departments: [],
  departmentCatalogWritable: false,
  editingProjectCode: null,
  editingUserId: null,
  editingDepartmentId: null,
  filterUserProject: "",
  filterProjectDept: "",
  currentUsername: "",
};

const PROJECT_STATUS_VALUES = new Set(["ativo", "inativo", "concluido"]);

document.body.classList.toggle("theme-dark", (localStorage.getItem("theme") || "") === "dark");

function toast(message) {
  const node = document.getElementById("admin-toast");
  if (!node) return;
  node.textContent = message;
  node.classList.add("show");
  clearTimeout(node._timer);
  node._timer = setTimeout(() => node.classList.remove("show"), 2800);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function normalizeProjectStatus(value, fallback = "ativo") {
  const normalized = String(value ?? "").trim().toLowerCase();
  return PROJECT_STATUS_VALUES.has(normalized) ? normalized : fallback;
}

function normalizeAccountType(value) {
  return String(value ?? "").trim().toLowerCase() === "project" ? "project" : "user";
}

function projectStatusLabel(status) {
  const normalized = normalizeProjectStatus(status, "ativo");
  if (normalized === "inativo") return "Inativo";
  if (normalized === "concluido") return "Concluido";
  return "Ativo";
}

function projectStatusBadgeClass(status) {
  const normalized = normalizeProjectStatus(status, "ativo");
  if (normalized === "inativo") return "badge badge-inactive";
  if (normalized === "concluido") return "badge badge-completed";
  return "badge badge-active";
}

function accountTypeLabel(value) {
  return normalizeAccountType(value) === "project" ? "Projeto" : "Usuario";
}

function normalizeProjectCodeFromName(name) {
  return String(name ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 64);
}

function generateUniqueProjectCode(name, editingCode = "") {
  const baseCode = normalizeProjectCodeFromName(name);
  if (!baseCode) return "";
  const inUse = new Set(state.projects.map((project) => String(project?.code ?? "").trim().toUpperCase()).filter(Boolean));
  if (editingCode) inUse.delete(String(editingCode).trim().toUpperCase());
  if (!inUse.has(baseCode)) return baseCode;
  let suffix = 2;
  while (suffix < 10000) {
    const suffixText = `_${suffix}`;
    const candidate = `${baseCode.slice(0, Math.max(1, 64 - suffixText.length))}${suffixText}`;
    if (!inUse.has(candidate)) return candidate;
    suffix += 1;
  }
  return `${baseCode.slice(0, 58)}_${Date.now().toString().slice(-5)}`;
}

function sortByNameThenCode(a, b) {
  return String(a?.name ?? "").localeCompare(String(b?.name ?? ""), "pt-BR") || String(a?.code ?? "").localeCompare(String(b?.code ?? ""), "pt-BR");
}

function normalizeProjectRecord(project) {
  const code = String(project?.code ?? "").trim().toUpperCase();
  const name = String(project?.name ?? code).trim() || code;
  const status = normalizeProjectStatus(project?.status, project?.isActive === false ? "inativo" : "ativo");
  return {
    code,
    name,
    status,
    isActive: status === "ativo",
    departmentId: String(project?.departmentId ?? "").trim() || null,
    departmentName: String(project?.departmentName ?? project?.department ?? "").trim(),
    departmentPhoneExtension: String(project?.departmentPhoneExtension ?? "").trim(),
  };
}

function normalizeDepartmentRecord(department) {
  return {
    id: String(department?.id ?? "").trim() || null,
    name: String(department?.name ?? "").trim(),
    phoneExtension: String(department?.phoneExtension ?? "").trim(),
    projectCount: Number(department?.projectCount ?? 0),
  };
}

async function apiFetch(url, options = {}) {
  const response = await fetch(url, { credentials: "same-origin", ...options });
  if (response.status === 401) {
    window.location.href = "/login";
    throw new Error("Sessao expirada.");
  }
  if (response.status === 403) {
    window.location.href = "/";
    throw new Error("Acesso negado.");
  }
  if (!response.ok) {
    let message = "Erro inesperado.";
    try {
      const body = await response.json();
      message = body?.error || message;
    } catch {
      message = response.statusText || message;
    }
    throw new Error(message);
  }
  if (response.status === 204) return null;
  return response.json();
}

async function checkAuth() {
  try {
    const status = await apiFetch("/api/auth/status");
    if (!status?.authenticated || !status?.isSuperAdmin) {
      window.location.href = "/";
      return false;
    }
    state.currentUsername = String(status?.username ?? "").trim();
    const welcome = document.getElementById("admin-welcome");
    if (welcome) welcome.textContent = `Logado como ${state.currentUsername}`;
    return true;
  } catch {
    window.location.href = "/login";
    return false;
  }
}

function getProjectUserCounts() {
  const counts = new Map();
  for (const project of state.projects) counts.set(project.code, 0);
  for (const user of state.users) {
    const assigned = new Set();
    if (user?.isSuperAdmin === true) {
      for (const code of counts.keys()) assigned.add(code);
    } else {
      for (const code of user?.allowedProjects ?? []) {
        const normalized = String(code ?? "").trim().toUpperCase();
        if (normalized && counts.has(normalized)) assigned.add(normalized);
      }
    }
    for (const code of assigned) counts.set(code, (counts.get(code) ?? 0) + 1);
  }
  return counts;
}

function renderStats() {
  const el = document.getElementById("stat-cards");
  if (!el) return;
  const totalProjects = state.projects.length;
  const activeProjects = state.projects.filter((project) => project.status === "ativo").length;
  const totalUsers = state.users.length;
  const activeUsers = state.users.filter((user) => user.isActive !== false).length;
  const superAdmins = state.users.filter((user) => user.isSuperAdmin === true).length;
  const deptCount = state.departments.length;
  el.innerHTML = `
    <article class="admin-stat-card"><span class="stat-label">Projetos</span><strong class="stat-value">${activeProjects}<small style="font-size:0.6em;color:var(--text-secondary)">/${totalProjects}</small></strong></article>
    <article class="admin-stat-card"><span class="stat-label">Usuarios ativos</span><strong class="stat-value">${activeUsers}<small style="font-size:0.6em;color:var(--text-secondary)">/${totalUsers}</small></strong></article>
    <article class="admin-stat-card"><span class="stat-label">Super admins</span><strong class="stat-value">${superAdmins}</strong></article>
    <article class="admin-stat-card"><span class="stat-label">Departamentos</span><strong class="stat-value">${deptCount}</strong></article>
  `;
}

function renderProjectDeptFilter() {
  const select = document.getElementById("filter-project-dept");
  if (!select) return;
  const current = String(state.filterProjectDept ?? "");
  const options = ['<option value="">Todos</option>', '<option value="__sem_departamento__">Sem departamento</option>'];
  for (const dept of state.departments) {
    const value = String(dept.id ?? "").trim() || `legacy:${dept.name.toLowerCase()}`;
    options.push(`<option value="${escapeHtml(value)}"${value === current ? " selected" : ""}>${escapeHtml(dept.name)}</option>`);
  }
  select.innerHTML = options.join("");
}

function getFilteredProjects() {
  if (!state.filterProjectDept) return [...state.projects].sort(sortByNameThenCode);
  if (state.filterProjectDept === "__sem_departamento__") {
    return state.projects.filter((project) => !project.departmentName).sort(sortByNameThenCode);
  }
  return state.projects.filter((project) => {
    const key = project.departmentId ? project.departmentId : `legacy:${project.departmentName.toLowerCase()}`;
    return key === state.filterProjectDept;
  }).sort(sortByNameThenCode);
}

function renderProjects() {
  const tbody = document.getElementById("projects-body");
  const empty = document.getElementById("projects-empty");
  const title = document.getElementById("projects-title");
  if (!tbody || !empty || !title) return;
  const list = getFilteredProjects();
  title.textContent = state.filterProjectDept ? "Projetos (filtrado)" : "Projetos";
  if (list.length === 0) {
    tbody.innerHTML = "";
    empty.hidden = false;
    return;
  }
  empty.hidden = true;
  tbody.innerHTML = list.map((project) => `
    <tr>
      <td><strong>${escapeHtml(project.code)}</strong></td>
      <td>${escapeHtml(project.name)}</td>
      <td>${project.departmentName ? `<span class="badge badge-dept">${escapeHtml(project.departmentName)}</span>` : '<span style="color:var(--text-secondary)">-</span>'}</td>
      <td><span class="${projectStatusBadgeClass(project.status)}">${projectStatusLabel(project.status)}</span></td>
      <td><button class="ghost btn btn-ghost btn-edit-project" type="button" data-code="${escapeHtml(project.code)}">Editar</button></td>
    </tr>
  `).join("");
  tbody.querySelectorAll(".btn-edit-project").forEach((btn) => btn.addEventListener("click", () => openProjectModal(btn.dataset.code)));
}

function getFilteredUsers() {
  if (!state.filterUserProject) return state.users;
  return state.users.filter((user) => user.isSuperAdmin === true || (user.allowedProjects ?? []).includes(state.filterUserProject));
}

function renderUsers() {
  const tbody = document.getElementById("users-body");
  const empty = document.getElementById("users-empty");
  if (!tbody || !empty) return;
  const list = getFilteredUsers();
  if (list.length === 0) {
    tbody.innerHTML = "";
    empty.hidden = false;
    return;
  }
  empty.hidden = true;
  tbody.innerHTML = list.map((user) => {
    const projectBadges = (user.allowedProjects ?? []).map((code) => {
      const role = user.rolesByProject?.[code] ? ` (${user.rolesByProject[code]})` : "";
      return `<span class="badge badge-dept" style="margin:1px">${escapeHtml(code)}${escapeHtml(role)}</span>`;
    }).join(" ") || "-";
    return `
      <tr>
        <td><strong>${escapeHtml(user.username)}</strong></td>
        <td>${escapeHtml(accountTypeLabel(user.accountType))}</td>
        <td>${escapeHtml(user.role)}</td>
        <td>${user.isActive !== false ? '<span class="badge badge-active">Ativo</span>' : '<span class="badge badge-inactive">Inativo</span>'}</td>
        <td>${user.isSuperAdmin === true ? '<span class="badge badge-super-admin">Sim</span>' : '-'}</td>
        <td style="max-width:320px;white-space:normal">${projectBadges}</td>
        <td><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="ghost btn btn-ghost btn-edit-user" type="button" data-id="${escapeHtml(user.id)}">Editar</button><button class="admin-danger-btn btn-delete-user" type="button" data-id="${escapeHtml(user.id)}">Remover</button></div></td>
      </tr>
    `;
  }).join("");
  tbody.querySelectorAll(".btn-edit-user").forEach((btn) => btn.addEventListener("click", () => openUserModal(btn.dataset.id)));
  tbody.querySelectorAll(".btn-delete-user").forEach((btn) => btn.addEventListener("click", async () => { await deleteUser(btn.dataset.id); }));
}

function renderDepartments() {
  const info = document.getElementById("departments-info");
  const tbody = document.getElementById("departments-body");
  const empty = document.getElementById("departments-empty");
  const saveBtn = document.getElementById("dept-save");
  if (!info || !tbody || !empty || !saveBtn) return;
  if (!state.departmentCatalogWritable) {
    info.textContent = "Cadastro de departamentos indisponivel. Execute a migracao supabase/005_departments.sql.";
    saveBtn.disabled = true;
  } else {
    info.textContent = "Cadastre departamentos com ramal e vincule projetos a eles.";
    saveBtn.disabled = false;
  }
  if (state.departments.length === 0) {
    tbody.innerHTML = "";
    empty.hidden = false;
    return;
  }
  empty.hidden = true;
  tbody.innerHTML = state.departments.map((dept) => `
    <tr>
      <td>${escapeHtml(dept.name)}</td>
      <td>${escapeHtml(dept.phoneExtension || "-")}</td>
      <td><strong>${Number(dept.projectCount ?? 0)}</strong></td>
      <td>${!state.departmentCatalogWritable || !dept.id
        ? "-"
        : `<div style="display:flex;gap:8px;flex-wrap:wrap"><button class="ghost btn btn-ghost btn-edit-dept" type="button" data-id="${escapeHtml(dept.id || "")}">Editar</button><button class="admin-danger-btn btn-delete-dept" type="button" data-id="${escapeHtml(dept.id || "")}">Remover</button></div>`}</td>
    </tr>
  `).join("");
  tbody.querySelectorAll(".btn-edit-dept").forEach((btn) => btn.addEventListener("click", () => beginDepartmentEdit(btn.dataset.id)));
  tbody.querySelectorAll(".btn-delete-dept").forEach((btn) => btn.addEventListener("click", async () => { await deleteDepartment(btn.dataset.id); }));
}

function renderReports() {
  const tbody = document.getElementById("reports-projects-body");
  const empty = document.getElementById("reports-empty");
  if (!tbody || !empty) return;
  const counts = getProjectUserCounts();
  const list = [...state.projects].sort(sortByNameThenCode);
  if (list.length === 0) {
    tbody.innerHTML = "";
    empty.hidden = false;
    return;
  }
  empty.hidden = true;
  tbody.innerHTML = list.map((project) => `
    <tr>
      <td><strong>${escapeHtml(project.code)}</strong></td>
      <td>${escapeHtml(project.name)}</td>
      <td>${project.departmentName ? `<span class="badge badge-dept">${escapeHtml(project.departmentName)}</span>` : '-'}</td>
      <td><span class="${projectStatusBadgeClass(project.status)}">${projectStatusLabel(project.status)}</span></td>
      <td><strong>${Number(counts.get(project.code) ?? 0)}</strong></td>
    </tr>
  `).join("");
}

function populateProjectSelectors() {
  const projectFilter = document.getElementById("filter-user-project");
  const defaultProject = document.getElementById("modal-default-project");
  if (projectFilter) {
    const current = projectFilter.value;
    projectFilter.innerHTML = '<option value="">Todos</option>';
    for (const project of state.projects) {
      projectFilter.innerHTML += `<option value="${escapeHtml(project.code)}"${current === project.code ? " selected" : ""}>${escapeHtml(project.code)} - ${escapeHtml(project.name)}</option>`;
    }
  }
  if (defaultProject) {
    const current = defaultProject.value;
    defaultProject.innerHTML = '<option value="">-</option>';
    for (const project of state.projects) {
      defaultProject.innerHTML += `<option value="${escapeHtml(project.code)}"${current === project.code ? " selected" : ""}>${escapeHtml(project.code)}</option>`;
    }
  }
}

function populateProjectDepartmentSelect(selectedDepartmentId = "") {
  const select = document.getElementById("pmodal-dept");
  if (!select) return;
  const options = ['<option value="">Sem departamento</option>'];
  for (const dept of state.departments) {
    options.push(`<option value="${escapeHtml(dept.id || "")}"${String(dept.id ?? "") === String(selectedDepartmentId ?? "") ? " selected" : ""}>${escapeHtml(dept.name)}</option>`);
  }
  select.innerHTML = options.join("");
}

function renderMemberships(rolesByProject = {}) {
  const container = document.getElementById("modal-memberships");
  if (!container) return;
  if (state.projects.length === 0) {
    container.innerHTML = '<p class="admin-inline-note">Nenhum projeto disponivel.</p>';
    return;
  }
  const grouped = new Map();
  for (const project of state.projects) {
    const key = project.departmentName || "Sem departamento";
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key).push(project);
  }
  let html = "";
  for (const [group, projects] of grouped) {
    html += `<div style="font-size:0.76rem;color:var(--text-secondary);font-weight:700;text-transform:uppercase;letter-spacing:0.4px;border-bottom:1px solid var(--border);padding-bottom:4px;margin-top:4px">${escapeHtml(group)}</div>`;
    for (const project of projects) {
      const role = rolesByProject[project.code] || "";
      html += `
        <div class="admin-membership-row">
          <label><input type="checkbox" class="membership-check" data-project="${escapeHtml(project.code)}"${role ? " checked" : ""} /><strong>${escapeHtml(project.code)}</strong><span style="color:var(--text-secondary)">${escapeHtml(project.name)}</span></label>
          <select class="membership-role" data-project="${escapeHtml(project.code)}"><option value="viewer"${role === "viewer" ? " selected" : ""}>Viewer</option><option value="editor"${role === "editor" ? " selected" : ""}>Editor</option><option value="admin"${role === "admin" ? " selected" : ""}>Admin</option></select>
        </div>
      `;
    }
  }
  container.innerHTML = html;
  container.querySelectorAll(".membership-check").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      if (normalizeAccountType(document.getElementById("modal-account-type")?.value) === "project" && checkbox.checked) {
        container.querySelectorAll(".membership-check").forEach((other) => { if (other !== checkbox) other.checked = false; });
      }
    });
  });
}

function collectMemberships() {
  const container = document.getElementById("modal-memberships");
  const rolesByProject = {};
  if (!container) return rolesByProject;
  container.querySelectorAll(".membership-check").forEach((checkbox) => {
    if (!checkbox.checked) return;
    const code = String(checkbox.dataset.project ?? "").trim();
    if (!code) return;
    const roleSelect = container.querySelector(`.membership-role[data-project="${code}"]`);
    rolesByProject[code] = roleSelect?.value || "viewer";
  });
  return rolesByProject;
}

function updateProjectCodePreview() {
  const codeInput = document.getElementById("pmodal-code");
  const nameInput = document.getElementById("pmodal-name");
  if (!codeInput || !nameInput) return;
  if (state.editingProjectCode) {
    codeInput.value = state.editingProjectCode;
    return;
  }
  codeInput.value = generateUniqueProjectCode(nameInput.value || "");
}

function applyAccountTypeRules() {
  const typeInput = document.getElementById("modal-account-type");
  const isSuperAdmin = document.getElementById("modal-is-super-admin");
  const memberships = document.getElementById("modal-memberships");
  if (!typeInput || !isSuperAdmin || !memberships) return;
  const isProject = normalizeAccountType(typeInput.value) === "project";
  if (isProject) {
    isSuperAdmin.checked = false;
    isSuperAdmin.disabled = true;
    const checked = [...memberships.querySelectorAll(".membership-check:checked")];
    if (checked.length > 1) checked.slice(1).forEach((checkbox) => { checkbox.checked = false; });
  } else {
    isSuperAdmin.disabled = false;
  }
}

function openProjectModal(code) {
  const overlay = document.getElementById("project-modal-overlay");
  const title = document.getElementById("project-modal-title");
  const codeInput = document.getElementById("pmodal-code");
  const nameInput = document.getElementById("pmodal-name");
  const statusInput = document.getElementById("pmodal-status");
  if (!overlay || !title || !codeInput || !nameInput || !statusInput) return;
  if (code) {
    const project = state.projects.find((item) => item.code === code);
    if (!project) return;
    state.editingProjectCode = code;
    title.textContent = `Editar Projeto: ${code}`;
    nameInput.value = project.name;
    statusInput.value = project.status;
    populateProjectDepartmentSelect(project.departmentId || "");
  } else {
    state.editingProjectCode = null;
    title.textContent = "Novo Projeto";
    nameInput.value = "";
    statusInput.value = "ativo";
    populateProjectDepartmentSelect("");
  }
  codeInput.readOnly = true;
  updateProjectCodePreview();
  overlay.classList.add("open");
}

function closeProjectModal() {
  document.getElementById("project-modal-overlay")?.classList.remove("open");
  state.editingProjectCode = null;
}

async function saveProject() {
  const name = document.getElementById("pmodal-name")?.value.trim() || "";
  const status = normalizeProjectStatus(document.getElementById("pmodal-status")?.value, "ativo");
  const departmentId = String(document.getElementById("pmodal-dept")?.value ?? "").trim() || undefined;
  if (!name) { toast("Nome obrigatorio."); return; }
  const code = state.editingProjectCode || generateUniqueProjectCode(name);
  if (!code) { toast("Nao foi possivel gerar codigo para o projeto."); return; }
  const saveBtn = document.getElementById("pmodal-save");
  if (!saveBtn) return;
  saveBtn.disabled = true;
  saveBtn.textContent = "Salvando...";
  try {
    await apiFetch("/api/admin/projects/upsert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, name, status, departmentId }),
    });
    toast("Projeto salvo com sucesso.");
    closeProjectModal();
    await loadOverview();
  } catch (error) {
    toast(`Erro: ${error.message}`);
  } finally {
    saveBtn.disabled = false;
    saveBtn.textContent = "Salvar projeto";
  }
}

function openUserModal(userId) {
  const overlay = document.getElementById("user-modal-overlay");
  const title = document.getElementById("user-modal-title");
  const username = document.getElementById("modal-username");
  const accountType = document.getElementById("modal-account-type");
  const role = document.getElementById("modal-role");
  const defaultProject = document.getElementById("modal-default-project");
  const isActive = document.getElementById("modal-is-active");
  const isSuper = document.getElementById("modal-is-super-admin");
  const password = document.getElementById("modal-password");
  if (!overlay || !title || !username || !accountType || !role || !defaultProject || !isActive || !isSuper || !password) return;

  populateProjectSelectors();
  if (userId) {
    const user = state.users.find((item) => item.id === userId);
    if (!user) return;
    state.editingUserId = user.id;
    title.textContent = `Editar: ${user.username}`;
    username.value = user.username;
    username.readOnly = true;
    accountType.value = normalizeAccountType(user.accountType);
    role.value = user.role || "viewer";
    defaultProject.value = user.defaultProjectCode || "";
    isActive.checked = user.isActive !== false;
    isSuper.checked = user.isSuperAdmin === true;
    password.value = "";
    renderMemberships(user.rolesByProject ?? {});
  } else {
    state.editingUserId = null;
    title.textContent = "Novo Usuario";
    username.value = "";
    username.readOnly = false;
    accountType.value = "user";
    role.value = "viewer";
    defaultProject.value = "";
    isActive.checked = true;
    isSuper.checked = false;
    password.value = "";
    renderMemberships({});
  }
  applyAccountTypeRules();
  overlay.classList.add("open");
}

function closeUserModal() {
  document.getElementById("user-modal-overlay")?.classList.remove("open");
  state.editingUserId = null;
}

async function saveUser() {
  const userId = state.editingUserId;
  const username = document.getElementById("modal-username")?.value.trim() || "";
  const accountType = normalizeAccountType(document.getElementById("modal-account-type")?.value);
  const role = document.getElementById("modal-role")?.value || "viewer";
  const defaultProjectCode = document.getElementById("modal-default-project")?.value.trim() || "";
  const isActive = document.getElementById("modal-is-active")?.checked === true;
  const isSuperAdmin = document.getElementById("modal-is-super-admin")?.checked === true;
  const password = document.getElementById("modal-password")?.value || "";
  const rolesByProject = collectMemberships();
  const selectedProjects = Object.keys(rolesByProject);

  if (!username) { toast("Username obrigatorio."); return; }
  if (!userId && !password) { toast("Senha obrigatoria para novos usuarios."); return; }
  if (accountType === "project" && selectedProjects.length !== 1) { toast("Conta de projeto deve ter exatamente 1 projeto marcado."); return; }

  const saveBtn = document.getElementById("modal-save");
  if (!saveBtn) return;
  saveBtn.disabled = true;
  saveBtn.textContent = "Salvando...";
  try {
    if (userId) {
      const body = { role, isActive, isSuperAdmin, accountType, rolesByProject, defaultProjectCode: accountType === "project" ? selectedProjects[0] : (defaultProjectCode || undefined) };
      if (password) body.password = password;
      await apiFetch(`/api/admin/users/${encodeURIComponent(userId)}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      toast("Usuario atualizado.");
    } else {
      await apiFetch("/api/admin/users/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, role, isActive, isSuperAdmin, accountType, rolesByProject, defaultProjectCode: accountType === "project" ? selectedProjects[0] : (defaultProjectCode || undefined) }),
      });
      toast("Usuario criado.");
    }
    closeUserModal();
    await loadOverview();
  } catch (error) {
    toast(`Erro: ${error.message}`);
  } finally {
    saveBtn.disabled = false;
    saveBtn.textContent = "Salvar";
  }
}

async function deleteUser(userId) {
  const id = String(userId ?? "").trim();
  if (!id) return;
  const user = state.users.find((item) => item.id === id);
  const confirmed = window.confirm(`Deseja remover o usuario "${user?.username || id}"? Esta acao nao pode ser desfeita.`);
  if (!confirmed) return;
  try {
    await apiFetch(`/api/admin/users/${encodeURIComponent(id)}`, { method: "DELETE" });
    toast("Usuario removido com sucesso.");
    await loadOverview();
  } catch (error) {
    toast(`Erro: ${error.message}`);
  }
}

function beginDepartmentEdit(id) {
  const department = state.departments.find((item) => String(item.id) === String(id));
  if (!department) return;
  state.editingDepartmentId = department.id;
  const name = document.getElementById("dept-name");
  const phone = document.getElementById("dept-phone");
  const cancel = document.getElementById("dept-cancel");
  if (name) name.value = department.name;
  if (phone) phone.value = department.phoneExtension || "";
  if (cancel) cancel.hidden = false;
}

function resetDepartmentForm() {
  state.editingDepartmentId = null;
  const name = document.getElementById("dept-name");
  const phone = document.getElementById("dept-phone");
  const cancel = document.getElementById("dept-cancel");
  if (name) name.value = "";
  if (phone) phone.value = "";
  if (cancel) cancel.hidden = true;
}

async function saveDepartment() {
  if (!state.departmentCatalogWritable) { toast("Cadastro de departamentos indisponivel."); return; }
  const name = document.getElementById("dept-name")?.value.trim() || "";
  const phoneExtension = document.getElementById("dept-phone")?.value.trim() || "";
  if (!name) { toast("Nome do departamento obrigatorio."); return; }
  const saveBtn = document.getElementById("dept-save");
  if (!saveBtn) return;
  saveBtn.disabled = true;
  saveBtn.textContent = "Salvando...";
  try {
    await apiFetch("/api/admin/departments/upsert", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: state.editingDepartmentId || undefined, name, phoneExtension }) });
    toast("Departamento salvo.");
    resetDepartmentForm();
    await loadOverview();
  } catch (error) {
    toast(`Erro: ${error.message}`);
  } finally {
    saveBtn.disabled = false;
    saveBtn.textContent = "Salvar departamento";
  }
}

async function deleteDepartment(id) {
  const departmentId = String(id ?? "").trim();
  if (!departmentId) return;
  const department = state.departments.find((item) => String(item.id) === departmentId);
  const confirmed = window.confirm(`Deseja remover o departamento "${department?.name || departmentId}"?`);
  if (!confirmed) return;
  try {
    await apiFetch(`/api/admin/departments/${encodeURIComponent(departmentId)}`, { method: "DELETE", headers: { "Content-Type": "application/json" } });
    toast("Departamento removido.");
    await loadOverview();
  } catch (error) {
    toast(`Erro: ${error.message}`);
  }
}

function openProfileModal() {
  const overlay = document.getElementById("profile-modal-overlay");
  const username = document.getElementById("profile-username");
  const password = document.getElementById("profile-password");
  const confirm = document.getElementById("profile-password-confirm");
  if (!overlay || !username || !password || !confirm) return;
  username.value = state.currentUsername || "";
  password.value = "";
  confirm.value = "";
  overlay.classList.add("open");
}

function closeProfileModal() {
  document.getElementById("profile-modal-overlay")?.classList.remove("open");
}

async function saveOwnProfile() {
  const usernameInput = document.getElementById("profile-username");
  const passwordInput = document.getElementById("profile-password");
  const confirmInput = document.getElementById("profile-password-confirm");
  const saveBtn = document.getElementById("profile-save");
  if (!usernameInput || !passwordInput || !confirmInput || !saveBtn) return;

  const username = usernameInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmInput.value;
  if (!username) { toast("Username obrigatorio."); return; }
  if ((password || confirmPassword) && password !== confirmPassword) { toast("Confirmacao de senha nao confere."); return; }

  saveBtn.disabled = true;
  saveBtn.textContent = "Salvando...";
  try {
    const body = { username };
    if (password || confirmPassword) {
      body.password = password;
      body.confirmPassword = confirmPassword;
    }
    const result = await apiFetch("/api/auth/profile", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    if (result?.requiresReauth) {
      toast("Perfil atualizado. Faca login novamente.");
      window.setTimeout(() => { window.location.href = "/login?force=1"; }, 500);
      return;
    }
    state.currentUsername = String(result?.username ?? username);
    const welcome = document.getElementById("admin-welcome");
    if (welcome) welcome.textContent = `Logado como ${state.currentUsername}`;
    closeProfileModal();
    toast("Perfil atualizado com sucesso.");
  } catch (error) {
    toast(`Erro: ${error.message}`);
  } finally {
    saveBtn.disabled = false;
    saveBtn.textContent = "Salvar perfil";
  }
}

function switchTab(panelName) {
  document.querySelectorAll(".admin-tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.panel === panelName));
  document.querySelectorAll(".admin-panel").forEach((panel) => panel.classList.toggle("active", panel.id === `panel-${panelName}`));
}

function renderAll() {
  renderStats();
  renderProjectDeptFilter();
  renderProjects();
  renderUsers();
  renderDepartments();
  renderReports();
  populateProjectSelectors();
}

async function loadOverview() {
  try {
    const data = await apiFetch("/api/admin/overview");
    state.projects = (data.projects ?? []).map(normalizeProjectRecord).filter((project) => Boolean(project.code)).sort(sortByNameThenCode);
    state.users = (data.users ?? []).map((user) => ({ ...user, accountType: normalizeAccountType(user?.accountType) }));
    state.departments = (data.departments ?? []).map(normalizeDepartmentRecord).filter((dept) => Boolean(dept.name)).sort((a, b) => String(a.name).localeCompare(String(b.name), "pt-BR"));
    state.departmentCatalogWritable = data.departmentCatalogWritable === true;
    renderAll();
  } catch (error) {
    toast(`Erro ao carregar dados: ${error.message}`);
  }
}

async function init() {
  const ok = await checkAuth();
  if (!ok) return;
  await loadOverview();

  document.querySelectorAll(".admin-tab").forEach((tab) => tab.addEventListener("click", () => switchTab(tab.dataset.panel)));
  document.getElementById("btn-refresh")?.addEventListener("click", loadOverview);
  document.getElementById("btn-edit-profile")?.addEventListener("click", openProfileModal);
  document.getElementById("filter-user-project")?.addEventListener("change", (event) => { state.filterUserProject = String(event.target.value ?? "").trim(); renderUsers(); });
  document.getElementById("filter-project-dept")?.addEventListener("change", (event) => { state.filterProjectDept = String(event.target.value ?? "").trim(); renderProjects(); });

  document.getElementById("btn-add-project")?.addEventListener("click", () => openProjectModal(null));
  document.getElementById("pmodal-name")?.addEventListener("input", updateProjectCodePreview);
  document.getElementById("pmodal-save")?.addEventListener("click", saveProject);
  document.getElementById("pmodal-cancel")?.addEventListener("click", closeProjectModal);

  document.getElementById("btn-add-user")?.addEventListener("click", () => openUserModal(null));
  document.getElementById("modal-account-type")?.addEventListener("change", applyAccountTypeRules);
  document.getElementById("modal-clear-memberships")?.addEventListener("click", () => document.getElementById("modal-memberships")?.querySelectorAll(".membership-check").forEach((checkbox) => { checkbox.checked = false; }));
  document.getElementById("modal-save")?.addEventListener("click", saveUser);
  document.getElementById("modal-cancel")?.addEventListener("click", closeUserModal);

  document.getElementById("dept-save")?.addEventListener("click", saveDepartment);
  document.getElementById("dept-cancel")?.addEventListener("click", resetDepartmentForm);

  document.getElementById("profile-save")?.addEventListener("click", saveOwnProfile);
  document.getElementById("profile-cancel")?.addEventListener("click", closeProfileModal);

  document.getElementById("project-modal-overlay")?.addEventListener("click", (event) => { if (event.target === event.currentTarget) closeProjectModal(); });
  document.getElementById("user-modal-overlay")?.addEventListener("click", (event) => { if (event.target === event.currentTarget) closeUserModal(); });
  document.getElementById("profile-modal-overlay")?.addEventListener("click", (event) => { if (event.target === event.currentTarget) closeProfileModal(); });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeProjectModal();
    closeUserModal();
    closeProfileModal();
  });
}

init();
