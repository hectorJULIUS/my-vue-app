<template>
  
  <nav class="navbar">
  <router-link to="/">Home</router-link> 
  <router-link to="/about">About</router-link> 
  <router-link to="/signup"><button>Signup</button></router-link> 
  <router-link to="/login"><button>login</button></router-link>
</nav>


{{ store.state.isLoggedIn }}

  <router-view/>
</template>
<script setup>
import {useStore} from 'vuex';
const store = useStore();

 </script>

<style>
.navbar {
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10px;
  width: 100%;
}

.router-link-active {
  

  text-decoration: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}

nav {
  padding: 20px;
}

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #f5f5f5;
}
</style>
