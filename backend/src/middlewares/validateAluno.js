const { body, validationResult } = require('express-validator');

const validateAluno = (method) => {
  let validations = [];

  if (method === 'POST') {
    validations = [
      body('name').notEmpty().withMessage('Name is required'),
      body('email').isEmail().withMessage('Email must be valid'),
      body('ra').notEmpty().withMessage('RA is required'),
      body('cpf').notEmpty().withMessage('CPF is required'),
    ];
  }

  if (method === 'PUT') {
    validations = [
      body('name').notEmpty().withMessage('Name is required'),
      body('email').isEmail().withMessage('Email must be valid'),
    ];
  }

  // Middleware final para verificar os erros
  validations.push((req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  });

  return validations;
};

module.exports = validateAluno;
