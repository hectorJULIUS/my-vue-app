<template>
  <v-row>
    <v-col cols="12" md="4">
      <img src="" alt="">

    </v-col>

    <v-col cols="12" md="8">
      <v-card-text>
   <h1 style="margin-bottom: 50px;">Log In</h1>
    <div class="login-container">
           <form action="" @submit.prevent="login">
            <div class="form-input">
              <input type="text" placeholder="Enter username" v-model="user.username">
            </div>

        <div class="form-input">
          <input type="password" placeholder="Enter password" v-model="user.password">
        </div>
        

        <div class="form-input">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  </v-card-text>
    </v-col>
  </v-row>
  <Footer />

</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Footer from '../components/FooterDown.vue'

const user = ref({
    username: '',
    password: ''
})

const router = useRouter();
const store = useStore()
store.commit('setIsLoggedIn')
console.log(store.state.isLoggedIn);

const login = async ()=> {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/login', user.value);
        console.log(response.data.token);
        const authToken = response.data.token;
        localStorage.setItem('auth-token', authToken)
        store.commit('setIsLoggedIn')
        router.push({name: 'dashboard'});
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
</script>
  
  <style scoped>
 /* Style the form container */
.login-form {
  width: 300px;

}

/* Style the form input fields */
.form-input {
  margin-bottom: 20px;
}

.form-input input {
  width: 40%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f0f0f0; /* Light gray background */
  color: #000; /* Black text color */
}

/* Style the submit button */
.form-input button {
  width: 40%;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #333; /* Dark gray background */
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.login-container{
  width: 100%;
  margin-bottom: 0%;
}

.form-input button:hover {
  background-color: #555; /* Slightly lighter gray on hover */
}

/* Optional: Add some spacing and alignment to center the form */
.login-form {
  margin-top: 50px;
  display: flex;
  justify-content: center;
}

/* Optional: Remove outline on input focus for a cleaner look */
.form-input input:focus {
  outline: none;
}

  </style>
  