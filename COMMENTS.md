# 📝 COMMENTS.md

Este documento apresenta os comentários técnicos sobre a solução desenvolvida para o desafio da vaga de Desenvolvedor Full Stack Web, contemplando tanto o backend quanto o frontend.

---

## 📐 Decisão da arquitetura utilizada

### Backend
A aplicação backend foi construída com **Node.js** e organizada em uma arquitetura de camadas:

- **Controllers**: recebem e tratam as requisições HTTP
- **Services**: centralizam a lógica de negócio
- **Models**: definidos com Sequelize, representando as entidades do banco
- **Middlewares**: responsáveis por validações e tratamento de erros
- **Routes**: definem os endpoints da API

A separação facilita manutenibilidade, testes e escalabilidade. O banco de dados utilizado é **PostgreSQL**, acessado por meio do ORM **Sequelize**.

### Frontend
A interface foi construída com **Vue.js** e **Vuetify**. A aplicação segue uma estrutura modular com:

- **Views**: páginas principais (ex: listagem, formulário de alunos)
- **Components**: componentes reutilizáveis
- **Router**: gerenciamento das rotas da SPA
- **Services**: responsáveis por consumir a API

---

## 📦 Bibliotecas e ferramentas de terceiros utilizadas

### Backend

| Biblioteca        | Função                                     |
|-------------------|---------------------------------------------|
| express           | Framework web para Node.js                 |
| sequelize         | ORM para abstração do banco relacional     |
| pg / pg-hstore    | Drivers PostgreSQL para Sequelize          |
| dotenv            | Carregamento de variáveis de ambiente      |
| cors              | Liberação de CORS entre frontend/backend   |
| nodemon           | Reinício automático no modo dev            |
| express-validator | Middleware para validação de requisições   |
| sequelize-cli     | Ferramentas de linha de comando do ORM     |

### Frontend

| Biblioteca        | Função                                     |
|-------------------|---------------------------------------------|
| vue               | Framework JavaScript para SPA              |
| vuetify           | Framework UI baseado em Material Design    |
| axios             | Consumo da API via HTTP                    |
| vue-router        | Gerenciamento de rotas                     |

---

## ⏳ O que eu melhoraria se tivesse mais tempo

- Paginação e filtros na listagem de alunos
- Autenticação com JWT e proteção de rotas
- Validação de RA e CPF únicos com mensagens específicas
- Refatoração dos formulários do frontend para usar Vuelidate ou Yup
- Autenticação/autorização 
- Testes unitários automatizados 
- Documentação com Swagger da API

---

## ✅ Funcionalidades entregues

- CRUD completo de alunos com validação e tratamento de erros
- API RESTful organizada em camadas
- Integração entre frontend e backend
- UI funcional baseada em mockups sugeridos
- Utilização de Git com commits frequentes e descritivos

---
