<template>
  <v-container>
    <h1 >Services We Offer</h1>
  <v-container fluid  >
    <v-row style="font-family:  Avenir, Helvetica, Arial, sans-serif;" >
      <v-col cols="12" md="3">
        <v-card to="/services" class="pressed-card"> <!-- Apply a custom class -->
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
        <v-card to="/services" class="pressed-card" >
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
        <v-card to="/services" class="pressed-card" >
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
        <v-card to="/services" class="pressed-card" >
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
