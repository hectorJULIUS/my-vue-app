<template>
    <div class="user-details-container">
      <h2>User Details</h2>
      <div class="user-details">
        <div class="user-detail">
          <label>Name:</label>
          <span>{{ userData.name }}</span>
        </div>
        <div class="user-detail">
          <label>Email:</label>
          <span>{{ userData.email }}</span>
        </div>
        <!-- Add more user details as needed -->
      </div>
    </div>
  </template>
  
  
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        userData: {},
      };
    },
    created() {
      this.fetchUserDetails();
    },
    methods: {
      fetchUserDetails() {
        axios.get('/api/user') // Adjust the URL to match your Laravel API endpoint
          .then(response => {
            // Handle the response and update your component's data
            this.userData = response.data;
          })
          .catch(error => {
            // Handle errors
            console.error(error);
          });
      },
    },
  };
  </script>

  <style scoped>
  .user-details-container {
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  h2 {
    font-size: 28px;
    margin-bottom: 20px;
    color: #333;
  }
  
  .user-details {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .user-detail {
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #555;
  }
  
  label {
    font-weight: bold;
    margin-right: 10px;
  }
  
  span {
    flex-grow: 1;
  }
  
  /* Add additional styling as needed */
  </style>
  