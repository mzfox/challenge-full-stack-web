<template>
  <v-app>
    <!-- Menu lateral -->
    <v-navigation-drawer app permanent>
      <v-list>
        <v-list-item>
          <v-list-item-title class="font-weight-bold">Módulo Acadêmico</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
          link
          to="/alunos"
          active-class="primary--text"
        >
          <v-list-item-title>Alunos</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Cabeçalho -->
    <v-app-bar app flat color="white">
      <v-toolbar-title class="text-h6">Grupo A</v-toolbar-title>
    </v-app-bar>

    <!-- Conteúdo principal -->
    <v-main>
      <v-container class="py-6">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
.primary--text {
  font-weight: bold;
}
</style>
