<template>
    <div class="not-found-container">
      <h1 class="not-found-title">404 <br> Not Found</h1>
      <p class="not-found-message">The page you are looking for does not exist.</p>
      <router-link to="/" class="not-found-link">Go to Home</router-link>
    </div>
    
  </template>


  
  <script>

  export default {
    name: 'NotFound',
  };
  </script>
  
  <style scoped>
 .not-found-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: black;
  color: white;
  text-decoration: none;
  transition: background-color 0.3s ease;
}
  .not-found-container {
    height:100%;
    background-size: cover;
    text-align: center;
    padding: 50px;
  }
  
  .not-found-title {
    /* margin-top:50px; */
    font-family:Droid Sans, Droid Sans Mono and Droid Serif;
    font-size: 80px;
    font-weight: bold;
    color: #333; /* Your desired text color */
    margin-bottom: 20px;
  }
  
  .not-found-message {
    font-size: 18px;
    color: #777; /* Your desired text color */
    margin-bottom: 30px;
  }
  
  </style>
  