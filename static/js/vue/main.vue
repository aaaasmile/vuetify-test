<!-- my-component.vue -->
<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title>
        <v-btn >Test app</v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/login">Navigate to Login</router-link>
      <v-toolbar-items class="hidden-sm-and-down"></v-toolbar-items>
    </v-toolbar>
    <router-view></router-view>
  </v-app>
</template>