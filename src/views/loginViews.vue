<template>
  <v-card-text>
    <div>
      <img src="../your-logo-url.png" alt="" class="logo">
    </div>

    <div class="login-container">
      <form @submit.prevent="login">
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

      <!-- Display login status message -->
      <div class="login-status" v-if="loginMessage">
        {{ loginMessage }}
      </div>
    </div>
  </v-card-text>
  <Footer />
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Footer from '../components/FooterDown.vue';
import Swal from 'sweetalert2';

const user = ref({
    username: '',
    password: ''
});

const router = useRouter();
const store = useStore();
const loginMessage = ref('');

const login = async () => {
  loginMessage.value = '';

  try {
    const response = await axios.post('http://127.0.0.1:8000/api/login', user.value);
    console.log(response);
    const authToken = response.data.token;
    localStorage.setItem('auth-token', authToken);
    localStorage.setItem('username', response.data.user.username);
    localStorage.setItem('email', response.data.user.email);
    localStorage.setItem('id', response.data.user.id);
    store.commit('setIsLoggedIn');

    const id = response.data.user.id; 

    await Swal.fire({
      title: 'Login successful',
      icon: 'success',
      timer: 2000,
    });

    if (id === 2) {
      router.push({ name: 'admin' });
    } else {
      router.push({ name: 'dashboard' });
    }
  } catch (error) {
    console.error('An error occurred during login:', error);

    if (axios.isAxiosError(error)) {
      if (error.response && error.response.status === 401) {
        await Swal.fire({
          title: 'Wrong credentials',
          text: 'Please check your username and password and try again.',
          icon: 'error',
        });

        loginMessage.value = 'Wrong credentials';
      } else {
        console.error('Axios response:', error.response);
      }
    }
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
.logo{
  margin-top: 50px;
  height: 10vh;
  width: 20%;
  margin-bottom: 40px;
}
.login-container{
  margin-bottom: 70px;
}


  </style>
  