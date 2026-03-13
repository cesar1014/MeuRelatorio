# MeuRelatorio

Sistema web para controle de gastos, consolidacao financeira e administracao multi-projeto.

O projeto combina:

- interface web em portugues
- API HTTP para autenticacao, configuracao e relatorios
- exportacao em Excel, PDF e CSV
- controle de acesso por usuario, role e projeto
- suporte a persistencia local em JSON ou Supabase

## Visao geral

O `MeuRelatorio` foi organizado para operar tanto em ambiente local quanto em deploy serverless. O backend centraliza autenticacao, regras de negocio, exportacoes e integracao com banco. O frontend entrega as telas operacionais, o hub de projetos e a area administrativa.

Principais capacidades:

- resumo financeiro por topico e por grupo
- detalhamento de lancamentos com filtros por periodo
- configuracao de topicos e bloqueios operacionais
- autenticacao com sessao e selecao de projeto ativo
- painel administrativo para projetos, usuarios e memberships
- compatibilidade com multiplos projetos no mesmo ambiente

## Arquitetura

- `server.js`: servidor principal, regras de negocio, exportacoes e integracao com Supabase
- `routes/`: rotas especializadas de autenticacao e administracao
- `public/`: interface principal, login, hub e painel admin
- `frontend/config/`: bundle React da tela de configuracoes
- `storage/`: persistencia local em JSON com cache
- `supabase/`: schema e migracoes SQL
- `scripts/`: tarefas operacionais e utilitarios
- `tests/`: testes automatizados de smoke e regras administrativas

## Modos de persistencia

O projeto suporta dois modos:

1. `supabase`
2. `arquivo_local`

Se `SUPABASE_URL` e `SUPABASE_SERVICE_ROLE_KEY` estiverem definidos, o backend usa Supabase.
Caso contrario, usa arquivos locais em `DATA_DIR`.

Estrutura esperada:

- seeds versionados: `data/seeds/<PROJECT_CODE>/`
- dados de runtime: `DATA_DIR/<PROJECT_CODE>/`
- sessoes e usuarios locais: `DATA_DIR/auth-sessions.json` e `DATA_DIR/auth-users.json`

## Requisitos

- Node.js instalado
- npm disponivel no ambiente

Em PowerShell com `ExecutionPolicy` restrita, use `npm.cmd` no lugar de `npm`.

## Execucao local

1. Instale as dependencias:

```bash
npm install
```

2. Copie o arquivo de exemplo de ambiente:

```bash
copy .env.example .env
```

3. Inicie o servidor:

```bash
npm run dev
```

4. Acesse:

```text
http://localhost:3000
```

Se necessario, execute:

```bash
npm.cmd run dev
```

## Scripts principais

```bash
npm run dev
npm run build
npm run build:ui
npm run lint
npm run format:check
npm run test
npm run auth:hash -- --password "SUA_SENHA"
npm run auth:revoke-sessions
npm run supa:bootstrap-project
npm run supa:cleanup-suspicious:check
npm run supa:cleanup-suspicious
npm run admin:make-super -- --username ADMIN --password SenhaForte123
```

## Configuracao de ambiente

Variaveis principais:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `APP_PROJECT_CODE`
- `APP_PROJECT_NAME`
- `SUPABASE_PROJECTS_TABLE`
- `SUPABASE_LANCAMENTOS_TABLE`
- `SUPABASE_TOPICOS_TABLE`
- `SUPABASE_APP_CONFIG_TABLE`
- `SUPABASE_AUTH_SESSIONS_TABLE`
- `SUPABASE_AUDIT_LOG_TABLE`
- `APP_LOGIN_USERS_JSON`
- `AUTH_TOKEN_SECRET`
- `ALLOW_INSECURE_DEV_AUTH_SECRET`
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
- `TRUST_PROXY`
- `DATA_DIR`

Exemplo minimo:

```env
SUPABASE_URL=https://SEU-PROJETO.supabase.co
SUPABASE_SERVICE_ROLE_KEY=SEU_SERVICE_ROLE_KEY
APP_PROJECT_CODE=PEOCON
APP_PROJECT_NAME=Projeto PEOCON
AUTH_TOKEN_SECRET=COLOQUE_UMA_CHAVE_LONGA_E_ALEATORIA_AQUI
APP_LOGIN_USERS_JSON=[{"username":"ADMIN","passwordHash":"pbkdf2$sha256$310000$SALT$HASH","role":"admin","allowedProjects":["PEOCON"],"defaultProjectCode":"PEOCON"}]
```

## Seeds e inicializacao

Seeds versionados atualmente:

- `data/seeds/PEOCON/topicos.json`
- `data/seeds/PEOCON/app-config.json`
- `data/seeds/FELLOW/topicos.json`
- `data/seeds/FELLOW/app-config.json`

Quando o `DATA_DIR` estiver vazio, o backend usa esses arquivos para inicializar topicos e configuracoes por projeto.

## Build do frontend de configuracoes

A tela de configuracoes usa um bundle React dedicado.

Para gerar os artefatos:

```bash
npm run build:ui
```

Arquivos gerados:

- `public/react/config-app.js`
- `public/react/config-app.css`

## Configuracao do Supabase

1. Crie um projeto no Supabase.
2. Execute `supabase/site_relatorio_schema.sql`.
3. Execute as migracoes complementares conforme necessario:

```text
supabase/002_admin_migration.sql
supabase/003_project_categories.sql
supabase/004_project_status.sql
supabase/005_departments.sql
supabase/006_app_users_account_type.sql
```

4. Configure o `.env`.
5. Rode o bootstrap inicial:

```bash
npm run supa:bootstrap-project
```

6. Reinicie o servidor.

## Qualidade e validacao

Comandos recomendados antes de publicar alteracoes:

```bash
npm run lint
npm run format:check
npm run test
npm run build
```

## Autenticacao e multi-projeto

Fluxo padrao:

- usuario com 1 projeto entra direto em `/`
- usuario com 2 ou mais projetos entra em `/hub`
- o projeto ativo fica associado a sessao

Rotas importantes:

- `GET /api/auth/status`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `POST /api/auth/active-project`
- `GET /api/projects/catalog`

Observacoes:

- em desenvolvimento local sem usuarios configurados, o backend pode gerar um usuario temporario
- sessoes podem ser revogadas via script ou por operacoes administrativas

## Painel administrativo

O painel administrativo permite:

- cadastrar e atualizar projetos
- cadastrar e atualizar usuarios
- definir memberships por projeto
- manter departamentos
- registrar auditoria de operacoes

Rotas principais:

- `GET /api/admin/overview`
- `GET /api/admin/departments`
- `POST /api/admin/departments/upsert`
- `DELETE /api/admin/departments/:id`
- `POST /api/admin/projects/upsert`
- `POST /api/admin/users/create`
- `PATCH /api/admin/users/:id`
- `DELETE /api/admin/users/:id`
- `PUT /api/admin/users/:id/memberships`

Todas as rotas administrativas exigem sessao de super admin.

## Exportacoes e relatorios

O sistema disponibiliza:

- `GET /api/export/excel`
- `GET /api/export/csv`
- `GET /api/export/pdf`

As exportacoes respeitam os filtros ativos de periodo e projeto.

## Limpeza de dados suspeitos

Para verificar registros potencialmente inseguros ou inconsistentes:

```bash
npm run supa:cleanup-suspicious:check
```

Para aplicar a limpeza:

```bash
npm run supa:cleanup-suspicious
```

O processo cria backup local em `data/backups/`.

## Deploy

O projeto ja inclui:

- `api/index.js` para execucao serverless
- `vercel.json` para roteamento

Fluxo recomendado de deploy:

1. configurar variaveis de ambiente
2. aplicar schema e migracoes no Supabase
3. executar `npm run build`
4. publicar na plataforma de destino

## Seguranca

Boas praticas recomendadas:

- nunca commitar `.env` nem credenciais reais
- manter dados de runtime fora do Git
- usar `AUTH_TOKEN_SECRET` forte e exclusivo por ambiente
- rotacionar `SUPABASE_SERVICE_ROLE_KEY` quando necessario
- preferir `passwordHash` PBKDF2 em vez de senha em texto puro
- limitar acessos com `admin`, `editor` e `viewer`
- manter `TRUST_PROXY=0` salvo quando houver proxy reverso confiavel

## Estrutura de diretorios

```text
api/
auth/
data/
frontend/
public/
routes/
scripts/
src/
storage/
supabase/
templates/
tests/
server.js
```

## Verificacao rapida

`GET /api/health` responde:

- `{ "ok": true }` para usuarios autenticados sem permissao diagnostica
- payload ampliado para usuarios com permissao de diagnostico

## Observacoes operacionais

- o backend carrega `.env` automaticamente via `dotenv`
- o projeto pode rodar inteiramente em modo local para desenvolvimento
- o bundle React de configuracoes deve ser regenerado quando houver mudancas em `frontend/config/`
