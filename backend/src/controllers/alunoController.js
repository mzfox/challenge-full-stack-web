const { Aluno } = require('../../models');

module.exports = {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    return res.json(alunos);
  },

  async store(req, res) {
    try {
      const { name, email, ra, cpf } = req.body;
      const aluno = await Aluno.create({ name, email, ra, cpf });
      return res.status(201).json(aluno);
    } catch (err) {
      return res.status(400).json({ error: 'Erro ao cadastrar aluno.' });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, email } = req.body;

      const aluno = await Aluno.findByPk(id);
      if (!aluno) return res.status(404).json({ error: 'Aluno não encontrado' });

      aluno.name = name;
      aluno.email = email;

      await aluno.save();
      return res.json(aluno);
    } catch (err) {
      return res.status(400).json({ error: 'Erro ao atualizar aluno.' });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const aluno = await Aluno.findByPk(id);
      if (!aluno) return res.status(404).json({ error: 'Aluno não encontrado' });

      await aluno.destroy();
      return res.status(204).send();
    } catch (err) {
      return res.status(400).json({ error: 'Erro ao excluir aluno.' });
    }
  }
};
