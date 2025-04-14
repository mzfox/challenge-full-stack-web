const express = require('express');
const AlunoController = require('../controllers/AlunoController');
const validateAluno = require('../middlewares/validateAluno');

const router = express.Router();

router.get('/', AlunoController.index);
router.post('/', validateAluno('POST'), AlunoController.store);
router.put('/:id', validateAluno('PUT'), AlunoController.update);
router.delete('/:id', AlunoController.delete);

module.exports = router;
