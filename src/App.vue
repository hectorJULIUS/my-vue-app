<template>
  <div>
      <v-toolbar>
      <RouterLink to="/" class="logo-button">
                <img  src="../src/your-logo-url.png" alt="Logo" class="logo">
      </RouterLink>
      <v-toolbar-title  ><b>County Wide Property Management</b>  </v-toolbar-title>
      <v-btn to="/services">Services</v-btn>
        <v-btn to="/signup">Get Started</v-btn>
        <v-btn to="/login">Login</v-btn>
        <v-btn  style=" color: #ffffff; background-color: #000000;border-radius: 20px; margin-right: 16px;" class="contact" to="/contact">Contact Us <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
    </v-toolbar>
    <router-view />
    <Home/>
  </div>
</template>



<style>
.logo-button {
  background: transparent;
  border: none;
  padding: 0;
}

.logo {
  padding-left: 10px;
  height: 70px;
  width: 170px;
}
</style>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<style>
.contact {
  color: #ffffff; 
  background-color: #000000;
  border-radius: 20px; 
  margin-right: 16px; 
}
</style>
