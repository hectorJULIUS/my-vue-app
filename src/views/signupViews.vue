<template>
 
          <v-row>
            <v-col cols="12" md="4" >

            </v-col>
            <v-col cols="12" md="8" >
              <v-card-text>
            <h1>Sign Up</h1>
            <!-- Signup Form -->
            <div class="signup-form">
              <form action="" @submit.prevent="signup">
                <div class="form-input">
                  <input type="text" placeholder="Enter username" v-model="user.username">
                </div>

                <div class="form-input">
                  <input type="email" placeholder="Enter email" v-model="user.email">
                </div>

                <div class="form-input">
                  <input type="password" placeholder="Enter password" v-model="user.password">
                </div>

                <div class="form-input">
                  <button type="submit">Signup</button>
                </div>
              </form>
            </div>
          </v-card-text>
            </v-col>
          </v-row>

          <Footer/>
  </template>
  
  
  <script>
  import Footer from '../components/FooterDown.vue'
  import { ref } from 'vue';
  import axios from 'axios'
  
  export default {
    components: {
      Footer
    },
    setup() {
      
      const user = ref({
          username: '',
          email: '',
          password: ''
      })
      console.log(user.value)
  
  
      const signup = async() => {
          console.log(user);
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/signup', user.value);
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      }
  
      return { signup, user, Footer };
    }
  }
  </script>
  
  <style scoped>
  .card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.signup-card {
  width: 100%;
  max-width: 400px;
  margin-top: 50px;
}
.signup-heading {
  text-align: center;
  margin-bottom: 20px;
}

.signup-form {
  width: 100%;
  margin-top: 20px;
}
 /* Style the form container */
.signup-form {
  width: 300px;
  margin: 0 auto;
}

/* Style the form input fields */
.form-input {
  margin-bottom: 20px;
}

.form-input input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f0f0f0; /* Light gray background */
  color: #000; /* Black text color */
}

/* Style the submit button */
.form-input button {
  width: 100%;
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
.signup-form {
  margin-top: 50px;
  display: flex;
  justify-content: center;
}

/* Optional: Remove outline on input focus for a cleaner look */
.form-input input:focus {
  outline: none;
}

  </style>
  