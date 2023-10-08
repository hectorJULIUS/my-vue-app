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

    <v-container  class="service" >
    <h1 class="subheading-text" style="margin-bottom: 50px;" >Here Is What we do:</h1>
    
    <v-row>
      <v-col  cols="12" md="3">
        <v-card style="background-color: black; color: rgb(255, 255, 255);" to="/services" class="pressed-card"> 
          <v-card-text>
            <div class="text-center">
              <v-list-item class="rounded-circle">
                <v-list-item-icon>
                  <v-icon style="height: 50px;"> mdi-48px mdi-wrench</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </div>
          </v-card-text>
          <h1>Repair</h1>
        </v-card>
      </v-col>


      <v-col cols="12" md="3">
        <v-card to="/services" class="pressed-card" >
          <v-card-text>
            <div class="text-center">
              <v-list-item class="rounded-circle"> 
                <v-list-item-icon>
                  <v-icon style="height: 50px;"> mdi-48px
                    mdi-pipe-disconnected
                  </v-icon>
                </v-list-item-icon>
              </v-list-item>
              
            </div>
          </v-card-text>
          <h1>Plumbing</h1>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card style="background-color: black; color: rgb(255, 255, 255);" to="/services" class="pressed-card" >
          <v-card-text>
            <div class="text-center">
              <v-list-item class="rounded-circle"> 
                <v-list-item-icon>
                  <v-icon style="height: 50px;"> mdi-48px
                    mdi-format-color-fill
                  </v-icon>
                </v-list-item-icon>
              </v-list-item>
             
            </div>
          </v-card-text>
          <h1>Painting</h1>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card to="/services" class="pressed-card" >
          <v-card-text>
            <div class="text-center">
              <v-list-item class="rounded-circle"> 
                <v-list-item-icon style="height: 50px;width:50px ;">
                  <v-icon style="height: 50px;"> mdi-48px
                    mdi-power
                  </v-icon>
                </v-list-item-icon>
              </v-list-item>
              
            </div>
          </v-card-text>
          <h1>Electrical Services</h1>
        </v-card>
      </v-col>

    </v-row>

    <v-row >
      <v-col cols="12" md="3">
        <v-card to="/services" class="pressed-card" >
          <v-card-text>
            <div class="text-center">
              <v-list-item class="rounded-circle"> 
                <v-list-item-icon>
                  <v-icon style="height: 50px;"> mdi-48px
                    mdi-home-variant
                  </v-icon>
                </v-list-item-icon>
              </v-list-item>
              
            </div>
          </v-card-text>
          <h1>Window and Door Services</h1>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card style="background-color: black; color: rgb(255, 255, 255);" to="/services" class="pressed-card" >
          <v-card-text>
            <div class="text-center">
              <v-list-item class="rounded-circle"> 
                <v-list-item-icon>
                  <v-icon style="height: 50px;"> mdi-48px
                    mdi-led-on
                  </v-icon>
                </v-list-item-icon>
              </v-list-item>
              
            </div>
          </v-card-text>
          <h1>Holiday Lighting Installation</h1>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card to="/services" class="pressed-card" >
          <v-card-text>
            <div class="text-center">
              <v-list-item class="rounded-circle"> 
                <v-list-item-icon>
                  <v-icon style="height: 50px;"> mdi-48px
                    mdi-rowing
                    
                  </v-icon>
                </v-list-item-icon>
              </v-list-item>
             
            </div>
          </v-card-text>
          <h1>Concrete and Pressure Washing</h1>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card style="background-color: black; color: rgb(255, 255, 255);" to="/services" class="pressed-card" >
          <v-card-text>
            <div class="text-center">
              <v-list-item class="rounded-circle"> 
                <v-list-item-icon>
                  <v-icon style="height: 50px;"> mdi-48px
                    mdi-blur
                  </v-icon>
                </v-list-item-icon>
              </v-list-item>
              
            </div>
          </v-card-text>
          <h1>Floor Installation & Repair</h1>
        </v-card>
      </v-col>

    </v-row>
  </v-container>

    

  <div class="testimonial-section">
    
    <div class="testimonials">
      <div class="inner">
        <h1>Testimonials</h1>
        <div class="border"></div>

        <div class="row">
          <div class="col">
            <div class="testimonial">
              <img src="../assets/img/" alt="">
              <div class="name">Hector Julius</div>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
            </div>
          </div>

          <div class="col">
            <div class="testimonial">
              <img src="p2.png" alt="">
              <div class="name">Nicole Kenya</div>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
              </div>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
            </div>
          </div>

          <div class="col">
            <div class="testimonial">
              <img src="" alt="">
              <div class="name">Sofy Gatkoth</div>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  
  

  </div>
  <Footer/>

</template>



<script setup>
import Footer from '../components/FooterDown.vue'


import { ref } from 'vue';

const isLoading = ref(true);


setTimeout(() => {
  isLoading.value = false;
}, 1000); 



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

.service{
  /* background-image: url('../assets/img/slide3.jpg'); */
  width: 100%;
  margin-top: 30px;
  margin-bottom: 50px;
  
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
.testimonials-section {
  background-color: #f8f8f8;
  padding: 40px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}


.testimonials{
 
  padding: 40px 0;
  background: #f1f1f1;
  color: #434343;
  text-align: center;
}
.inner{
  max-width: 1200px;
  margin: auto;
  overflow: hidden;
  padding: 0 20px;
}

.border{
  width: 160px;
  height: 5px;
  background: #000000;
  margin: 26px auto;
}

.row{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.col{
  flex: 33.33%;
  max-width: 33.33%;
  box-sizing: border-box;
  padding: 15px;
}
.testimonial{
  background: #fff;
  padding: 30px;
}
.testimonial img{
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.name{
  font-size: 20px;
  text-transform: uppercase;
  margin: 20px 0;
}
.stars{
  color: #050505;
  margin-bottom: 20px;
}


@media screen and (max-width:960px) {
.col{
  flex: 100%;
  max-width: 80%;
}
}

@media screen and (max-width:600px) {
.col{
  flex: 100%;
  max-width: 100%;
}
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
      testimonials: [
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          author: "John Doe",
        },
        {
          text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          author: "Jane Smith",
        },
        {
          text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
          author: "Alice Johnson",
        },
      ],
    };
  },
  methods: {
    animateTestimonials() {
      // Add animation logic here (e.g., using CSS transitions or animations)
      // You can toggle a CSS class to trigger the animation
      // For example, you can add/remove a class to fade in/out testimonials
    },
  },
};
</script>
