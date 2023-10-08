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
import Footer from '../components/FooterDown.vue'
import Swal from 'sweetalert2';

const user = ref({
    username: '',
    password: ''
})

const router = useRouter();
const store = useStore();

const loginMessage = ref('');

const login = async () => {
  loginMessage.value = ''; // Initialize the message as empty

  try {
    const response = await axios.post('http://127.0.0.1:8000/api/login', user.value);
    console.log(response.data.token);
    const authToken = response.data.token;
    localStorage.setItem('auth-token', authToken);
    store.commit('setIsLoggedIn');

    // Display a success pop-up message
    await Swal.fire({
      title: 'Login successful',
      icon: 'success',
      timer: 2000, // Auto close the pop-up after 2 seconds (optional)
    });

    router.push({ name: 'dashboard' });
  } catch (error) {
    console.log(error);

    // Check the error condition before displaying the error pop-up
    if (error.response && error.response.status === 401) {
      // Display an error pop-up message for wrong credentials
      await Swal.fire({
        title: 'Wrong credentials',
        text: 'Please check your username and password and try again.',
        icon: 'error',
      });

      loginMessage.value = 'Wrong credentials'; // Update the message after displaying the error
    } else {
      // Handle other types of errors (e.g., network issues)
      console.error('An unexpected error occurred:', error);

      // You can choose to display a different error message or take other actions here
    }
  }
};

// Call the login function to initiate the login process
login();

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
  