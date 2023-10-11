<template>
  <v-layout class="rounded rounded-md">
      <v-app-bar title="CountyWide PropertyManagement"></v-app-bar>

      <v-navigation-drawer permanent>
        <img  src="../your-logo-url.png" alt="Logo" class="logo">

          <v-divider></v-divider>
          

          <v-list density="compact" nav>
              <v-list-item style="text-align: left;" prepend-icon="mdi-home" title="Dashboard" value="dashboard" to="/dashboard/home"></v-list-item>
              <v-list-item style="text-align: left;" prepend-icon="mdi-account-check" title="Profile" value="profile" to="/dashboard/profile"></v-list-item>
              
              <v-list-item title="Quotation Calc" prepend-icon="mdi-format-quote-open" value="quotation" to="/dashboard/quotation"  style="text-align: left;"></v-list-item>
              <v-list-item title="Review" prepend-icon="mdi-thumb-up" value="quotation" style="text-align: left;"></v-list-item>
              <v-list-item title="Settings" prepend-icon="mdi-shape-plus" value="quotation"  style="text-align: left;"></v-list-item>
              <v-list-item title="Logout" prepend-icon="mdi-logout" value="profile" @click="handleLogout" style="text-align: left;color:red;"></v-list-item>
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

<style>
.calendar {
    width: 80%;
    max-width: 600px;
    margin: 20px auto;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}

h1 {
    font-size: 24px;
}

table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #ccc;
}

th {
    background-color: #007BFF;
    color: #fff;
    padding: 10px;
}

th, td {
    border: 1px solid #ccc;
    text-align: center;
    padding: 10px;
}

/* Style for specific days or events */
/* Example: Highlight Sundays */
td:nth-child(7n+1) {
    background-color: #FF5733;
    color: #fff;
}

/* Style for today's date */
td.today {
    background-color: #007BFF;
    color: #fff;
    font-weight: bold;
}
</style>




