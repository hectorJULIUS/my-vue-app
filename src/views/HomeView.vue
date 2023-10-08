<template>
  <div>

    <div class="preloader" v-if="isLoading">
      <div>
        <img class="spinner" src="../your-logo-url.png" alt="">
      </div>

    </div>

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

    <v-container style="margin-top: 50px;">
    <v-row>
      <!-- Image Section -->
      <v-col cols="12" md="6">
        <img src="../build.jpg"   alt=""  class="build">
      </v-col>

      <!-- Paragraph Section -->
      <v-col cols="12" md="6">
        <div class="responsive-container">
          <p class="heading-text">THIS IS</p>
          <p class="subheading-text">Who we are:</p>
          <p class="description-text">
            We are a Property Management Company that is using technology to bring transparency, accountability and excellent customer experiences for both property owners and tenants.
          </p>
        </div>
      </v-col>

    </v-row>
  </v-container>
  
  

  </div>
  <Footer/>

</template>

<script setup>
import Footer from '../components/FooterDown.vue'


import { ref } from 'vue';

const isLoading = ref(true);

// Simulate a delay to hide the preloader (you can replace this with your actual loading logic)
setTimeout(() => {
  isLoading.value = false;
}, 1000); // Change the delay as needed

</script>

<style>
@keyframes zoomIn {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.5);
  }
}

.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(8, 8, 8, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: spin 3s linear infinite, zoomIn 2s ease-in-out infinite;
}

@media (max-width: 768px) {
  .preloader {
    background-color: rgba(8, 8, 8, 0.9);
  }
  
  .spinner {
    width: 70px;
    height: 40px;
  }
}
</style>


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
.build{
  width: 100%;
    height: 90%;
    max-width: 400px;
    margin: auto;
}
/* Define the responsive behavior */
@media (max-width: 768px) {
  .responsive-container {
    text-align: center;
  }
  
  .heading-text {
    font-size: 16px;
  }

  .subheading-text {
    font-size: 30px;
  }

  .description-text {
    font-size: 14px;
  }
}

/* Default styles for larger screens */
.responsive-container {
  text-align: left;
}

.heading-text {
  font-size: 20px;
  color: rgb(1, 1, 95);
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.subheading-text {
  font-size: 50px;
  font-weight: 800;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.description-text {
  font-size: 20px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
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
