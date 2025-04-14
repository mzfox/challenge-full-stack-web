# 📚 Fullstack Challenge

Este repositório contém a solução completa para o desafio técnico de Desenvolvedor Full Stack Web, proposto pela maior plataforma de educação do Brasil.

A aplicação simula um sistema de **cadastro de alunos em turmas**, com funcionalidades de listagem, criação, edição e exclusão de alunos.

---

## ⚙️ Tecnologias utilizadas

### Backend
- Node.js
- Express
- Sequelize (ORM)
- PostgreSQL
- dotenv
- express-validator
- nodemon

### Frontend
- Vue.js 3
- Vuetify 3
- Vue Router
- Axios

---

## 🧭 Como rodar este projeto do zero

### 1. Clonar o repositório

```bash
git clone https://github.com/mzfox/challenge-full-stack-web
cd challenge-full-stack-web
```

---

## 🛠️ Backend (Node.js + PostgreSQL)

### 2. Configurar o ambiente

```bash
cd backend
npm install
```

### 3. Criar o arquivo `.env`

```env
DB_USER=postgres
DB_PASS=sua_senha
DB_NAME=edtech_matriculas
DB_HOST=localhost
```

### 4. Executar o banco de dados

Certifique-se de que o PostgreSQL está rodando e acessível localmente.

### 5. Rodar as migrations do banco

```bash
npx sequelize-cli db:create --env development --config config/config.js
npx sequelize-cli db:migrate --env development --config config/config.js
```

> ⚠️ Caso ocorra erro `Dialect undefined`, use o `--config` como acima.

### 6. Iniciar o servidor

```bash
npm run dev
```

> Servidor em `http://localhost:3001/api`

---

## 💻 Frontend (Vue 3 + Vuetify)

### 7. Configurar o ambiente

```bash
cd frontend
npm install
npm run serve
```
> Acesse `http://localhost:8080`
---

## ✅ Funcionalidades entregues

- [x] Cadastro de alunos
- [x] Edição de aluno (nome e email apenas)
- [x] Listagem com busca
- [x] Exclusão com confirmação
- [x] Integração completa com API
- [x] Layout inspirado no mockup
- [x] Responsividade com Vuetify

---

## 🐛 Ajustes e correções que foram necessárias

- Corrigido erro `Dialect undefined` com uso de `--config config.js`
- Criado manualmente os arquivos `plugins/vuetify.js` e `webfontloader.js`

---
