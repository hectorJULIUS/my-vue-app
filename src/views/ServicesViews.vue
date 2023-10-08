<template>
    <div>
    <v-container fluid>
        <v-row>
        <v-col cols="4">
        <v-card class="elevation-10">
            <v-card-title class="subtitle">Services</v-card-title>
            <v-list dense>
            <v-list-item
                v-for="(service, index) in services"
                :key="index"
                @click="selectService(index)"
                :class="{ 'service-selected': index === selectedServiceIndex }"
            >
                <v-list-item-content>
                <v-list-item-title class="text-h6 text-left">{{ service.name }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            </v-list>
        </v-card>
        </v-col>

        <v-col cols="8">
        <v-card class="elevation-10" v-if="selectedServiceIndex !== null">
            <v-card-title class="subtitle">{{ services[selectedServiceIndex].name }}</v-card-title>
            <v-card-text>{{ services[selectedServiceIndex].description }}</v-card-text>
        </v-card>
        <v-card class="elevation-10" v-else>
            <v-card-title class="subtitle">Select a Service</v-card-title>
            <v-card-text>Please select a service from the list to see details.</v-card-text>
        </v-card>


        <div class="card">
       <h2>What Can Our Home Improvement Professionals Do For You?</h2>
       <div>
         <v-text-field label="Enter a Service/Postal Code" outlined clearable></v-text-field>
       </div>
       <button @click="submit">SUBMIT</button>
     </div>

        </v-col>
  </v-row>
  </v-container>
  </div>
    <Footer />
  </template>
  
  <script>
  import Footer from '../components/FooterDown.vue'
  export default {
    components: {
      Footer
    },
    setup() {
      return {Footer}
    
    },
    data() {
  return {
    services: [
      {
        name: 'Repair',
        description: `Discover Reliable Repair Services:

                At County Wide Property Management, we are your trusted partner for top-notch repair services. With skilled professionals and years of experience, we offer a wide range of expertise:

                Appliance Repair
                Window and Door Services
                Landscaping
                Plumbing Solutions
                Electrical Repairs
                Painting Services
                And More!
                Why Choose Us?

                Quality Workmanship
                Timely and Reliable Service
                Customer Satisfaction Guaranteed
                Competitive Pricing`
                },
      {
        name: 'Plumbing',
        description: 'Our plumbing services cover everything from fixing leaky faucets and pipes to full-scale plumbing installations. Our team of experienced plumbers is equipped to handle residential and commercial plumbing needs. We prioritize efficiency, reliability, and customer satisfaction in every plumbing job we undertake.'
      },
      {
        name: 'Painting',
        description: 'Transform your space with our professional painting services. Whether you need interior or exterior painting, our skilled painters will provide you with a fresh and vibrant look for your property. We use high-quality paints and expert techniques to ensure a long-lasting and beautiful finish.'
      },
      {
        name: 'Electrical Services',
        description: 'When it comes to electrical services, safety and expertise are paramount. Our licensed electricians offer a wide range of services, including electrical repairs, installations, and inspections. We follow industry standards and best practices to ensure the safety and functionality of your electrical systems.'
      },
      {
        name: 'Window and Door Services',
        description: 'Your windows and doors are essential for both aesthetics and security. Our window and door services include repairs, replacements, and installations. We offer a variety of styles and materials to enhance the beauty and functionality of your property.'
      },
      {
        name: 'Holiday Lighting Installation',
        description: 'Add a touch of magic to your holidays with our professional holiday lighting installation services. Our team will create a dazzling display that will impress your neighbors and create unforgettable memories.'
      },
      {
        name: 'Concrete and Pressure Washing',
        description: 'Restore the appearance of your concrete surfaces with our concrete and pressure washing services. We use specialized equipment to remove dirt, stains, and grime, leaving your concrete areas looking clean and rejuvenated.'
      },
      {
        name: 'Floor Installation & Repair',
        description: 'Upgrade your floors with our floor installation and repair services. We offer a wide range of flooring options, including hardwood, laminate, tile, and more. Our skilled craftsmen ensure precise installation and efficient repairs.'
      },
      // Add more services as needed
    ],
    selectedServiceIndex: null,
  };
},
    methods: {
      selectService(index) {
        this.selectedServiceIndex = index;
      },
    },
  };
  </script>
  
  <style>
  

  .subtitle {
  font-size: 18px;
  font-weight: bold;
}

.elevation-10 {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.service-selected {
  background-color: #3498db;
  color: white;
}

.text-left {
  text-align: left; 
}
.card {
  max-width: 400px; /* Adjust the max-width to your desired size */
  margin: 0 auto;
  padding: 20px;
  margin-top: 40px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
}

h2 {
  font-size: 26px;
  margin-bottom: 20px;
}

v-text-field {
  width: 100%;
  margin-bottom: 20px;
}

button {
  
  width: 100%;
  padding: 10px;
  background-color: #0b0b0b;
  color: #ffffff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #040404; 
  color: #ffffff;
}

  </style>
  
  
  