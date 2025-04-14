<template>
    <v-container>
      <h2>{{ isEditando ? 'Editar aluno' : 'Cadastro de aluno' }}</h2>
  
      <v-form @submit.prevent="salvar" ref="form">
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="aluno.name"
              label="Nome"
              placeholder="Informe o nome completo"
              required
            />
          </v-col>
  
          <v-col cols="12" md="6">
            <v-text-field
              v-model="aluno.email"
              label="E-mail"
              placeholder="Informe apenas um e-mail"
              required
            />
          </v-col>
  
          <v-col cols="12" md="6">
            <v-text-field
              v-model="aluno.ra"
              label="RA"
              placeholder="Informe o registro acadêmico"
              :disabled="isEditando"
              required
            />
          </v-col>
  
          <v-col cols="12" md="6">
            <v-text-field
              v-model="aluno.cpf"
              label="CPF"
              placeholder="Informe o número do documento"
              :disabled="isEditando"
              required
            />
          </v-col>
        </v-row>
  
        <v-row justify="end">
          <v-btn variant="tonal" class="mr-2" @click="$router.push('/alunos')">
            Cancelar
          </v-btn>
          <v-btn color="primary" type="submit">
            Salvar
          </v-btn>
        </v-row>
      </v-form>
    </v-container>
  </template>
  
  <script>
  import api from '@/services/api';
  
  export default {
    name: 'FormAluno',
    data() {
      return {
        aluno: {
          name: '',
          email: '',
          ra: '',
          cpf: ''
        },
        isEditando: false
      };
    },
    async mounted() {
      const id = this.$route.params.id;
      if (id) {
        this.isEditando = true;
        try {
          const { data } = await api.get(`/alunos`);
          const encontrado = data.find((a) => a.id === Number(id));
          if (encontrado) {
            this.aluno = encontrado;
          }
        } catch (error) {
          console.error('Erro ao carregar aluno:', error);
        }
      }
    },
    methods: {
      async salvar() {
        try {
          if (this.isEditando) {
            await api.put(`/alunos/${this.aluno.id}`, {
              name: this.aluno.name,
              email: this.aluno.email
            });
          } else {
            await api.post('/alunos', this.aluno);
          }
          this.$router.push('/alunos');
        } catch (error) {
          console.error('Erro ao salvar aluno:', error);
        }
      }
    }
  };
  </script>
  