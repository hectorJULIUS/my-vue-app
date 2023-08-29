<template>
    <v-container >
      <v-row>
        <v-col cols="12" md="6" class="image-section">
        <img src="../assets/Contact.png" alt="" class="contact-image">
      </v-col>
          
      
      <v-col style="padding-top: 20px;" cols="12" md="6">
          <v-card class="contact-card">
            <v-card-title class="text-center">Contact Us</v-card-title>
            <v-alert
              v-if="message"
              :value="true"
              type="success"
              dismissible
              class="mb-4"
            >
              {{ message }}
            </v-alert>
            <v-alert
              v-if="error"
              :value="true"
              type="error"
              dismissible
              class="mb-4"
            >
              {{ error }}
            </v-alert>
            <v-form style="padding-bottom: 20px;" @submit.prevent="submitForm">
              <v-text-field style="width: 50%; padding: 20px;"
                v-model="name"
                label="Name"
                required
              ></v-text-field>
              <v-text-field style="width: 50%; padding: 20px;"
                v-model="email"
                label="Email"
                required
                type="email"
              ></v-text-field>
              <v-text-field style="width: 80%; padding: 20px;"
                v-model="messageContent"
                label="Message"
                required
                multi-line
              ></v-text-field>
              <v-btn style="background-color: black; color: aliceblue;" type="submit" >Submit</v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </template>
  
  <script>
  import Footer from '../components/FooterDown.vue'

  export default {
    components: {
      Footer
    },
    setup() {
      return {Footer}
    },
    data() {
      return {
        name: '',
        email: '',
        messageContent: '',
        message: '',
        error: ''
      };
    },
    methods: {
      submitForm() {
        // Simulate sending the form data
        if (this.name && this.email && this.messageContent) {
          this.message = 'Message sent successfully!';
          this.name = '';
          this.email = '';
          this.messageContent = '';
        } else {
          this.error = 'Please fill in all fields.';
        }
      }
    }
  };
  </script>
  
  <style>
  .text-center {
    text-align: center;
  }
  .contact-card {

    padding: 20px;
    margin: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .contact-image {
    width: 100%;
    height: 90%;
    max-width: 400px;
    margin: auto;
  }

   /* Media Query for Tablets and Smaller Screens */
   @media screen and (max-width: 768px) {
    .image-section {
      margin-bottom: 20px;
    }
  }
  </style>
  