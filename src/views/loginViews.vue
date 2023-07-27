<template>
    <div class="login-container">
        <h2>Login</h2>
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
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const user = ref({
    username: '',
    password: ''
})

const router = useRouter();
const store = useStore()

const login = async ()=> {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/login', user.value);
        console.log(response.data.token);
        const authToken = response.data.token;
        localStorage.setItem('auth-token', authToken)
        store.commit('setIsLoggedIn')
        router.push({name: 'dashboard'});
    } catch (error) {
        console.log(error);
    }
}
</script>
  
  <style scoped>
 /* Style the form container */
.login-form {
  width: 300px;
  margin: 0 auto;
}

/* Style the form input fields */
.form-input {
  margin-bottom: 20px;
}

.form-input input {
  width: 20%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f0f0f0; /* Light gray background */
  color: #000; /* Black text color */
}

/* Style the submit button */
.form-input button {
  width: 20%;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #333; /* Dark gray background */
  border: none;
  border-radius: 4px;
  cursor: pointer;
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
  