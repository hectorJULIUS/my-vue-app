<template>
    <v-layout class="rounded rounded-md">
      <v-app-bar title="CountyWide PropertyManagement"></v-app-bar>
  
      <v-navigation-drawer permanent>
        <img src="../your-logo-url.png" alt="Logo" class="logo">
        
        <v-divider></v-divider>
  
        <v-list density="compact" nav>
            <h1>Hello Admin</h1>
          <v-list-item
            style="text-align: left;"
            prepend-icon="mdi-account-check"
            title="UserList"
            value="profile"
            to="/admin/users"
          ></v-list-item>
          <v-list-item
            title="Create User"
            prepend-icon="mdi-format-quote-open"
            
            to="/admin/create"
            style="text-align: left;"
          ></v-list-item>

          <v-list-item
            title="transactions"
            prepend-icon="mdi-bookmark-check"
            
            to="/transactions"
            style="text-align: left;"
          ></v-list-item>
          
          <v-list-item
            title="Logout"
            prepend-icon="mdi-logout"
            value="logout"
            @click="handleLogout"
            style="text-align: left; color: red;"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>

  
      <v-container fluid>
        <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
          <router-view></router-view>
          
        </v-main>
      </v-container>
    </v-layout>
  </template>
  
  <script>
  export default {
    name: 'AdminView',
    methods: {
      handleLogout() {
        // Delete the authentication token from localStorage (or wherever you store it).
        localStorage.removeItem('auth-token');
  
        // Call the logout mutation to reset the isLoggedIn state to false.
        this.$store.commit('logout');
  
        // Redirect the user to the login page.
        this.$router.push('/login');
      },
    },
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  