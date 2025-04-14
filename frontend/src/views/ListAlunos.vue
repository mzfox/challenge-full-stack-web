<template>
    <v-container>
      <!-- Título -->
      <v-row class="align-center justify-space-between mb-4">
        <h2>Consulta de alunos</h2>
        <v-btn color="primary" @click="$router.push('/alunos/novo')">
          Cadastrar Aluno
        </v-btn>
      </v-row>
  
      <!-- Filtro de busca -->
      <v-row class="mb-3" align="center" justify="start">
        <v-col cols="12" md="4">
          <v-text-field
            v-model="filtro"
            label="Digite sua busca"
            variant="outlined"
            dense
          />
        </v-col>
        <v-col cols="auto">
          <v-btn color="grey" @click="aplicarFiltro">Pesquisar</v-btn>
        </v-col>
      </v-row>
  
      <!-- Tabela de alunos -->
      <v-table density="comfortable">
        <thead>
          <tr>
            <th>Registro Acadêmico</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="aluno in alunosFiltrados" :key="aluno.id">
            <td>{{ aluno.ra }}</td>
            <td>{{ aluno.name }}</td>
            <td>{{ formatarCPF(aluno.cpf) }}</td>
            <td>
              <span class="text-primary" @click="editarAluno(aluno.id)" style="cursor: pointer">[Editar]</span>
              <span class="text-error ml-2" @click="confirmarExclusao(aluno.id)" style="cursor: pointer">[Excluir]</span>
            </td>
          </tr>
        </tbody>
      </v-table>
  
      <!-- Modal de confirmação -->
      <v-dialog v-model="dialog" max-width="400">
        <v-card>
          <v-card-title class="text-h6">Confirmar exclusão</v-card-title>
          <v-card-text>Deseja realmente excluir este aluno?</v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn text @click="dialog = false">Cancelar</v-btn>
            <v-btn color="red" @click="excluirAluno">Excluir</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </template>
  
  <script>
  import api from '@/services/api';
  
  export default {
    name: 'ListAlunos',
    data() {
      return {
        alunos: [],
        filtro: '',
        dialog: false,
        alunoIdParaExcluir: null
      };
    },
    computed: {
      alunosFiltrados() {
        if (!this.filtro) return this.alunos;
        return this.alunos.filter(a =>
          a.name.toLowerCase().includes(this.filtro.toLowerCase()) ||
          a.cpf.includes(this.filtro) ||
          a.ra.includes(this.filtro)
        );
      }
    },
    methods: {
      async carregarAlunos() {
        try {
          const { data } = await api.get('/alunos');
          this.alunos = data;
        } catch (error) {
          console.error('Erro ao carregar alunos:', error);
        }
      },
      editarAluno(id) {
        this.$router.push(`/alunos/${id}`);
      },
      confirmarExclusao(id) {
        this.alunoIdParaExcluir = id;
        this.dialog = true;
      },
      async excluirAluno() {
        try {
          await api.delete(`/alunos/${this.alunoIdParaExcluir}`);
          this.dialog = false;
          this.carregarAlunos();
        } catch (error) {
          console.error('Erro ao excluir aluno:', error);
        }
      },
      aplicarFiltro() {
        // opcional: forçar atualização futura, se precisar API-side
      },
      formatarCPF(cpf) {
        if (!cpf) return '';
        return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
      }
    },
    mounted() {
      this.carregarAlunos();
    }
  };
  </script>
  