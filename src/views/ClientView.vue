<template>
    <v-container>
      <v-card class="contact-card">
        <div class="contact-section">
          <v-icon class="phone-icon" size="40">mdi-phone</v-icon>
          <a class="phone-number" href="tel:+0716656513">Request Service Now! Call 0716656513</a>
        </div>
      </v-card>
  
      <v-text-field style="width:50%;" v-model="searchService" label="Search Service" outlined clearable @input="filterServices"></v-text-field>
  
      <v-row>
        <v-col cols="12" md="3" v-for="(service, index) in filteredServices" :key="index">
          <v-card
            style="background-color: rgba(260, 260, 260, 0.8);"
            class="service-card-item"
            @click="scrollToService(index)"
            :class="{ 'service-selected': index === selectedServiceIndex }"
          >
          <v-card-text class="black-text">
            <div>
                <v-list-item>
                <v-list-item-icon>
                </v-list-item-icon>
                <h1>{{ service.name }}</h1>
                <div class="border"></div>
                <p>{{ service.description }}</p>
                </v-list-item>
            </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        services: [
          { name: 'Repair', description: 'Discover Reliable Repair Services: At County Wide Property Management, we are your trusted partner for top-notch repair services. With skilled professionals and years of experience, we offer a wide range of expertise.' },
          { name: 'Plumbing', description: 'Discover Reliable Repair Services: At County Wide Property Management, we are your trusted partner for top-notch repair services. With skilled professionals and years of experience, we offer a wide range of expertise.' },
          { name: 'Painting', description: 'Discover Reliable Repair Services: At County Wide Property Management, we are your trusted partner for top-notch repair services. With skilled professionals and years of experience, we offer a wide range of expertise.' },
          { name: 'Electrical Services', description: 'Discover Reliable Repair Services: At County Wide Property Management, we are your trusted partner for top-notch repair services. With skilled professionals and years of experience, we offer a wide range of expertise.' },
          { name: 'Window and Door Services', description: 'Discover Reliable Repair Services: At County Wide Property Management, we are your trusted partner for top-notch repair services. With skilled professionals and years of experience, we offer a wide range of expertise.' },
          { name: 'Holiday Lighting Installation', description: 'Discover Reliable Repair Services: At County Wide Property Management, we are your trusted partner for top-notch repair services. With skilled professionals and years of experience, we offer a wide range of expertise.' },
          { name: 'Concrete Pressure Washing', description: 'Discover Reliable Repair Services: At County Wide Property Management, we are your trusted partner for top-notch repair services. With skilled professionals and years of experience, we offer a wide range of expertise.' },
          { name: 'Floor Installation & Repair', description: 'Discover Reliable Repair Services: At County Wide Property Management, we are your trusted partner for top-notch repair services. With skilled professionals and years of experience, we offer a wide range of expertise.' },
        ],
        selectedServiceIndex: null,
        searchService: '',
      };
    },
    computed: {
      filteredServices() {
        const query = this.searchService.toLowerCase().trim();
        if (!query) {
          return this.services; // If the query is empty, return all services.
        }
  
        return this.services.filter(service => {
          // Use a case-insensitive search by converting service names to lowercase.
          return service.name.toLowerCase().includes(query);
        });
      },
    },
    methods: {
      // Function to scroll to the corresponding service card
      scrollToService(index) {
        // Scroll to the element with the corresponding index
        const element = this.$el.querySelectorAll('.service-card-item')[index];
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          this.selectedServiceIndex = index;
        }
      },
      filterServices() {
        // This method is called when the user types in the search field. The computed property handles the filtering.
      },
    },
  };
  </script>
  
  <style scoped>
  .black-text {
  color: black;
  }
  .contact-section {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
  
  .phone-icon {
    color: #009688; /* Choose your preferred color */
    margin-right: 10px;
  }
  
  .phone-number {
    font-size: 24px;
    color: #009688; /* Choose your preferred color */
    text-decoration: none;
  }
  
  .phone-number:hover {
    text-decoration: underline;
    color: #007a6d; /* Hover color */
  }
  
  .service-card-item {
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    border-radius: 10px;
    text-align: center;
    padding: 20px;
  }
  
  .service-icon {
    height: 50px;
    color: #009688; /* Choose your preferred color */
  }
  
  .service-title {
    font-size: 18px;
    margin-top: 10px;
  }
  
  .service-description {
    font-size: 14px;
    color: #ccc;
    margin-top: 10px;
  }
  
  .border {
    height: 2px;
    background-color: #009688; /* Choose your preferred color */
    margin: 10px 0;
  }
  
  .service-link {
    display: inline-block;
    margin-top: 20px;
  }
  
  .service-button {
    background-color: #009688; /* Choose your preferred color */
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
  }
  
  .service-button:hover {
    background-color: #007a6d; /* Hover color */
  }
  
  /* Add additional styling as needed */
  </style>
  