const express = require('express');
const alunoRoutes = require('./aluno.routes');

const router = express.Router();

router.use('/alunos', alunoRoutes);

module.exports = router;
