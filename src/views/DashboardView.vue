<template>
  <v-layout class="rounded rounded-md">
      <v-app-bar title="CountyWide PropertyManagement"></v-app-bar>

      <v-navigation-drawer permanent>
          <v-list-item prepend-avatar="#" title="#"></v-list-item>

          <v-divider></v-divider>

          <v-list density="compact" nav>
              <v-list-item style="text-align: left;" prepend-icon="mdi-home" title="Dashboard" value="dashboard" to="/dashboard/home"></v-list-item>
              <v-list-item style="text-align: left;" prepend-icon="mdi-account-check" title="Profile" value="profile" to="/dashboard/profile"></v-list-item>
              <v-list-item title="Logout" prepend-icon="mdi-logout" value="profile" @click="handleLogout" style="text-align: left;"></v-list-item></v-list>
      </v-navigation-drawer>

      <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
          <router-view></router-view>
      </v-main>
  </v-layout>
</template>

<script>
export default {
  name: 'DashboardView',
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



