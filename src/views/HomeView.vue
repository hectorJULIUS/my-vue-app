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
  </div>

</template>

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
