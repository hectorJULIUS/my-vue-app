<template>
  <div>
    <v-carousel>
      <v-carousel-item
        v-for="(item, index) in sliderItems"
        :key="index"
        :src="item.image"
        :aspect-ratio="2.4"
      ></v-carousel-item>
    </v-carousel>

    <v-container>
      <v-row>
        <v-col >
          <AboutView />
        </v-col>
        
      </v-row>
    </v-container>

    <v-container style="margin-top: 50px; height: 350px;">
    <v-row>
      <!-- Image Section -->
      <v-col cols="6">
        <img src="../build.jpg"   alt="" height="300">
      </v-col>

      <!-- Paragraph Section -->
      <v-col cols="6">
        <p style="font-size: 20px;color: rgb(1, 1, 95); text-align: left; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">THIS IS</p>
        <p style="font-size: 50px; text-align: left; font-weight: 80px; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">Who we are:</p>
        <p style="font-size: 20px; text-align: left; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
          We are a Property Management Company that is using technology to bring transparency, accountability and excellent customer experiences for both property owners and tenants.
        </p>
      </v-col>
    </v-row>
  </v-container>
  

  </div>
  <Footer/>

</template>

<script setup>
import Footer from '../components/FooterDown.vue'
</script>

<style>
/* Ensure the carousel takes the full width of its container */
.v-carousel {
  width: 100%;
}

/* Remove extra padding added by v-carousel-item */
.v-carousel-item {
  padding: 0;
}

/* Ensure each carousel item's image fills the carousel container */
.v-carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

<script>

import AboutView from "../views/AboutView.vue";


export default {
  components: {
    AboutView,
  },
  
  data() {
    return {
      sliderItems: [
        { image: require("@/assets/img/slide1.jpg") },
        { image: require("@/assets/img/slide2.jpg") },
        { image: require("@/assets/img/slide3.jpg") },
      ],
    };
  },
};
</script>
