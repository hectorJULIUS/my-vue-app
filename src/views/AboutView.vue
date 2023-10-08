<template>
  
  
  <v-container>
    <v-row>
      <!-- Text Content -->
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
  background-color: #3498db; /* Change to your desired background color */
  transform: translateY(2px); /* Push the card down slightly */
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); /* Add a subtle shadow */
  transition: transform 0.2s, box-shadow 0.2s; /* Add a smooth transition */
}

/* Hover effect (optional) */
.pressed-card:hover {
  transform: translateY(0);
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}
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
