import { createRouter, createWebHistory } from 'vue-router';
import ListAlunos from '@/views/ListAlunos.vue';
import FormAluno from '@/views/FormAluno.vue';

const routes = [
  {
    path: '/',
    redirect: '/alunos'
  },
  {
    path: '/alunos',
    name: 'ListAlunos',
    component: ListAlunos
  },
  {
    path: '/alunos/novo',
    name: 'NovoAluno',
    component: FormAluno
  },
  {
    path: '/alunos/:id',
    name: 'EditarAluno',
    component: FormAluno
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
