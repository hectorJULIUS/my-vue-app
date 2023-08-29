<template>
<div class="footer">
  <div class="top-row">
    <div class="column">

      <RouterLink to="/" class="logo-button">
                <img  src="../your-logo-url.png" alt="Logo" class="logo">
      </RouterLink>

    </div>
    
    <div class="column">
      <h3 style="font-size: 30px;">Need more information?</h3>
     
    </div>
    <div class="column">
      <v-btn style=" color: #000000; background-color: #ffffff;border-radius: 20px; margin-right: 16px;" class="contact" to="/contact">Contact Us <v-icon right>mdi-arrow-right</v-icon> </v-btn>
    </div>
  </div>
  <div class="bottom-row">
    <p>&copy; 2023 County Wide Property Management. <br> All rights reserved.</p>
    <div class="column">
      <h1></h1>
    </div>
    <div class="column">
      <h1></h1>
    </div>
  </div>
</div>
</template>

<style>
  body {
    margin: 0;
    padding: 0;
  }
  .footer {
    background-color:rgb(0, 0, 0);
    color: rgb(247, 247, 247);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .top-row, .bottom-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  .column {
    flex: 1;
    padding: 10px;
    text-align: center;
  }
</style>
