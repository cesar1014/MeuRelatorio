# Site de Relatorio de Gastos (Fundacao Pio XII)

Aplicacao web com:
- frontend em portugues
- API de lancamentos e resumo
- exportacao Excel/PDF/CSV
- topicos travados por projeto em `data/{PROJECT_CODE}/app-config.json`
- login obrigatorio + plataforma `/hub` para usuarios com acesso a 2+ projetos

## Persistencia

O projeto agora suporta 2 modos:

1. `supabase` (recomendado para producao/Vercel)
2. `arquivo_local` (fallback para desenvolvimento local)

Se `SUPABASE_URL` e `SUPABASE_SERVICE_ROLE_KEY` estiverem definidos, usa Supabase.
Se nao estiverem, usa `data/{PROJECT_CODE}/lancamentos.json`.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Build da UI React (Configuracoes)

A tela de Configuracoes agora possui um bundle React/Tailwind hibrido (com fallback para o layout legado).

```bash
npm run build:ui
```

Arquivos gerados:
- `public/react/config-app.js`
- `public/react/config-app.css`

## Configurar Supabase

1. Crie um projeto no Supabase.
2. No SQL Editor, execute o arquivo `supabase/site_relatorio_schema.sql`.
3. Copie `.env.example` para `.env` e preencha:

```env
SUPABASE_URL=https://SEU-PROJETO.supabase.co
SUPABASE_SERVICE_ROLE_KEY=SEU_SERVICE_ROLE_KEY
APP_PROJECT_CODE=PEOCON
APP_PROJECT_NAME=Projeto PEOCON
APP_LOGIN_USERS_JSON=[{"username":"PEOCON","passwordHash":"pbkdf2$sha256$310000$SALT_PEOCON$HASH_PEOCON","role":"admin","allowedProjects":["PEOCON"]},{"username":"FELLOW","passwordHash":"pbkdf2$sha256$310000$SALT_FELLOW$HASH_FELLOW","role":"admin","allowedProjects":["FELLOW"]},{"username":"Cesar1014","passwordHash":"pbkdf2$sha256$310000$SALT_CESAR$HASH_CESAR","role":"admin","allowedProjects":["PEOCON","FELLOW"]}]
AUTH_TOKEN_SECRET=COLOQUE_UMA_CHAVE_LONGA_E_ALEATORIA_AQUI
```

Para gerar hash PBKDF2:

```bash
npm run auth:hash -- --password "SUA_SENHA_FORTE"
```

4. Execute o bootstrap local -> Supabase:

```bash
npm run supa:bootstrap-project
```

5. Reinicie o servidor.

Obs.: o backend carrega `.env` automaticamente (via `dotenv`).

## Limpeza de payloads suspeitos

Para verificar ou remover registros de teste (ex.: `=2+2`, `HYPERLINK(...)`, texto enorme):

```bash
npm run supa:cleanup-suspicious:check
```

Aplicar limpeza:

```bash
npm run supa:cleanup-suspicious
```

O script limpa local + Supabase e cria backup local em `data/backups/`.

## Configuracao de ambiente

Variaveis principais:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `APP_PROJECT_CODE` (default `PEOCON`)
- `APP_PROJECT_NAME` (opcional)
- `SUPABASE_PROJECTS_TABLE` (default `projects`)
- `SUPABASE_LANCAMENTOS_TABLE` (default `lancamentos`)
- `SUPABASE_TOPICOS_TABLE` (default `topicos`)
- `SUPABASE_APP_CONFIG_TABLE` (default `app_config`)
- `SUPABASE_AUTH_SESSIONS_TABLE` (default `auth_sessions`)
- `SUPABASE_AUDIT_LOG_TABLE` (default `audit_log`)
- `APP_LOGIN_USERS_JSON` (RBAC por usuario/projeto)
- `AUTH_TOKEN_SECRET`
- `ALLOW_INSECURE_DEV_AUTH_SECRET` (default `false`)
- `AUTH_SESSION_TTL_MS`
- `AUTH_MAX_ACTIVE_SESSIONS`
- `LOGIN_RATE_WINDOW_MS`
- `LOGIN_RATE_MAX_ATTEMPTS`
- `LOGIN_RATE_MAX_ATTEMPTS_PER_USER`
- `LOGIN_RATE_GLOBAL_WINDOW_MS`
- `LOGIN_RATE_MAX_ATTEMPTS_GLOBAL`
- `LOGIN_RATE_MAX_TRACKED_KEYS`
- `PDF_EXPORT_MAX_ITEMS`
- `PDF_TEXT_MAX_CHARS`
- `TRUST_PROXY` (default `0`)
- `DATA_DIR`

## Auth multi-projeto

- Fluxo:
  - usuario com 1 projeto entra direto em `/`
  - usuario com 2+ projetos entra em `/hub` e escolhe o curso sem relogar
- `GET /api/auth/status`: retorna usuario, permissoes, projetos permitidos e projeto ativo.
- `POST /api/auth/active-project`: define/troca o projeto ativo na sessao.
- `GET /api/projects/catalog`: retorna catalogo dos projetos/cursos permitidos com metadados (`code`, `name`, `brandName`, `displayOrder`, `isActive`, `department`, `categories`).
- `GET /api/admin/users` (admin): lista usuarios e projetos.
- `POST /api/admin/users` (admin): cria usuario com role + projetos permitidos.
- `PUT /api/admin/users/:id` (admin): altera role/projetos e opcionalmente redefine senha.

## Deploy na Vercel

O projeto ja inclui:
- `api/index.js` (adapter serverless)
- `vercel.json` (roteamento API + frontend)

No painel da Vercel:

1. Configure as variaveis acima.
2. Execute o SQL `supabase/site_relatorio_schema.sql` no Supabase.
3. Execute uma vez `npm run supa:bootstrap-project` no ambiente local/CI para carregar dados iniciais.
4. Faca o deploy.

### Seguranca recomendada

- Gire periodicamente a `SUPABASE_SERVICE_ROLE_KEY` no Supabase.
- Nunca commite `.env` no repositorio (apenas `.env.example`).
- Use um `AUTH_TOKEN_SECRET` longo e aleatorio.
- Nao use credenciais padrao; configure usuarios reais em `APP_LOGIN_USERS_JSON` (de preferencia com `passwordHash` PBKDF2).
- Use papeis de acesso (`admin`, `editor`, `viewer`) para limitar alteracoes.
- O logout revoga a sessao no servidor (token antigo deixa de funcionar).
- Mantenha `TRUST_PROXY=0` por padrao; so altere quando houver proxy reverso confiavel.
- Em desenvolvimento local sem usuarios configurados, o backend gera um usuario temporario `admin` com senha aleatoria (exibida no log).
- `AUTH_TOKEN_SECRET` e exigido por padrao; fallback temporario em dev so com `ALLOW_INSECURE_DEV_AUTH_SECRET=true`.

## Migracao de dados locais (manual)

Se voce ja possui dados em `data/{PROJECT_CODE}/`, o comando abaixo faz upsert para o projeto atual:

```bash
npm run supa:bootstrap-project
```

Ele sincroniza:
- `data/{PROJECT_CODE}/topicos.json` -> `topicos`
- `data/{PROJECT_CODE}/lancamentos.json` -> `lancamentos`
- `data/{PROJECT_CODE}/app-config.json` -> `app_config`
- `data/auth-sessions.json` -> `auth_sessions`

## Estrutura principal

- `server.js`: API, regras de negocio, exportacoes e integracao Supabase
- `auth/passwords.js`: verificacao de senha (texto puro legado + hash PBKDF2)
- `routes/auth.js`: rotas de autenticacao
- `storage/json-store.js`: cache de leitura/escrita JSON local
- `api/index.js`: entrypoint serverless para Vercel
- `public/`: interface web
- `supabase/site_relatorio_schema.sql`: schema SQL completo
- `scripts/bootstrap-supabase-project.js`: bootstrap de dados locais para Supabase
- `scripts/cleanup-suspicious-lancamentos.js`: limpeza de registros suspeitos
- `data/PEOCON/topicos.json`: topicos fixos + orcamento por topico do PEOCON
- `data/FELLOW/topicos.json`: topicos e mapeamento do FELLOW
- `templates/fundacao-template.xlsx`: template oficial do Excel
- `templates/fellow-template.xlsx`: template oficial do Excel do FELLOW

## Verificacao rapida

`GET /api/health` exige autenticacao:
- usuario `admin`: recebe diagnostico (`projectCode`, `persistencia`, `tabelas`, `trustProxy`)
- demais usuarios autenticados: recebe apenas `{ "ok": true }`

## Sistema de Admin (Super Admin)

### Migracao SQL

Execute os arquivos abaixo no SQL Editor do Supabase **apos** o schema principal:

1. `supabase/002_admin_migration.sql`
2. `supabase/003_project_categories.sql`

As migracoes criam/ajustam:

- Tabela `app_users` (persistencia de usuarios no DB)
- Tabela `project_memberships` (acesso por projeto por usuario)
- Colunas `display_order`, `brand_name`, `department` e `categories` na tabela `projects`
- Indices uteis

### Criando o primeiro Super Admin

**Opcao 1: Via script (recomendado)**

```bash
npm run admin:make-super -- --username MEU_ADMIN --password SenhaForte123
```

O script imprime o SQL de INSERT/UPDATE que voce pode executar no SQL Editor do Supabase.

**Opcao 2: Via JSON local**

Adicione `"isSuperAdmin": true` ao usuario desejado no arquivo `data/auth-users.json`:

```json
{
  "id": "user-admin",
  "username": "ADMIN",
  "passwordHash": "pbkdf2$sha256$310000$...",
  "role": "admin",
  "isActive": true,
  "isSuperAdmin": true,
  "allowedProjects": ["PEOCON"],
  "rolesByProject": {"PEOCON": "admin"}
}
```

**Opcao 3: Via SQL direto**

```sql
UPDATE public.app_users
SET is_super_admin = true, role = 'admin'
WHERE lower(btrim(username)) = lower('MEU_ADMIN');
```

### Acessando o Painel Admin

1. Faca login como super admin.
2. Um link "Administracao" aparecera no menu lateral (sidebar).
3. Acesse `/admin` para gerenciar projetos e usuarios.

### Funcionalidades do Painel Admin

- **Projetos**: criar/editar projetos (codigo, nome, ativo, ordem, brand name, categorias)
- **Usuarios**: criar/editar usuarios (username, senha, ativo, super admin)
- **Memberships**: definir quais projetos cada usuario pode acessar e o role por projeto (admin/editor/viewer)
- **Auditoria**: todas acoes ficam registradas em `audit_log`

### API Admin

| Metodo | Rota | Descricao |
|--------|------|-----------|
| `GET` | `/api/admin/overview` | Lista projetos e usuarios |
| `POST` | `/api/admin/projects/upsert` | Criar/editar projeto |
| `POST` | `/api/admin/users/create` | Criar usuario |
| `PATCH` | `/api/admin/users/:id` | Editar usuario |
| `PUT` | `/api/admin/users/:id/memberships` | Definir memberships |

Todas as rotas admin requerem sessao de super admin.
