<template>
  
  
  <v-container>
    <h1 class="subheading-text"> About Us</h1>
    <div class="border"></div>
    <v-row>
      <v-col class="text" cols="12" md="6">
        <p class="section-title">With us, your property is in safe hands</p>
        <p class="section-description">We bring transparency, accountability, and exceptional customer experience in property management by leveraging technology.</p>
        <ul>
          <li class="section-features">Fully digitized financial management</li>
          <li class="section-features">24/7 online report access</li>
          <li class="section-features">Prompt disbursements of rent by 10th</li>
          <li class="section-features">Affordable management fee</li>
        </ul>
      </v-col>

      <!-- Image -->
      <v-col class="img" cols="12" md="6">
        <v-img :src="imageUrl" aspect-ratio="2/3" class="fill-height"></v-img>
      </v-col>
    </v-row>
  </v-container>
  
</template>

<script>
export default {
  data() {
    return {
      imageUrl: require("@/assets/img/property-image.png"), 
    };
  },
};
</script>

<style>
.pressed-card {
 
  transform: translateY(2px); 
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
}


.pressed-card:hover {
  transform: scale(1);
  background-color: rgba(0, 0, 0, 0.201);
  color: aliceblue;
  transform: translateY(0);
  box-shadow: 0 8px 6px rgb(0, 0, 0);}
.text {
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.section-title {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
}

.section-description {
  font-size: 20px;
  margin-bottom: 15px;
}

.section-features {
  font-size: 14px;
  margin-bottom: 5px;
  list-style: none;
}
.img{
height: 80vh;
}
.text{
  
  margin-top: 80px;
}

</style>
