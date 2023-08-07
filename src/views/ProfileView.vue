<template>
    <v-container class="profile">
      <!-- Profile Card -->
      <v-card class="pa-4 mb-4">
        <v-row align="center">
          <v-col cols="12" sm="6" md="4">
            <v-file-input
              v-model="file"
              label="Upload Profile Picture"
              accept="image/*"
              @change="uploadFile"
            ></v-file-input>
          </v-col>
          <v-col cols="12" sm="6" md="8" class="text-center">
            <img class="profile-picture" :src="formattedImageUrl" alt="Profile Picture" />
            <h1 class="mb-2">{{ fullName }}</h1>
            <p class="subtitle">{{ jobTitle }}</p>
          </v-col>
        </v-row>
      </v-card>
  
      <!-- About Me Card -->
      <v-card class="pa-4 mb-4">
        <v-card-title>About Me</v-card-title>
        <v-card-text>
          <p class="text--primary">{{ aboutMe }}</p>
        </v-card-text>
      </v-card>
  
      <!-- Work Experience Card -->
      <v-card class="pa-4 mb-4">
        <v-card-title>Work Experience</v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item-group>
              <v-list-item v-for="experience in workExperience" :key="experience.id">
                <v-list-item-content>
                  <v-list-item-title>{{ experience.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{ experience.company }}</v-list-item-subtitle>
                  <v-list-item-subtitle>{{ experience.duration }}</v-list-item-subtitle>
                  <v-list-item-subtitle>{{ experience.description }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card-text>
      </v-card>
  
      <!-- Save Changes Button -->
      <v-card class="profile-footer pa-4">
        <v-btn color="primary" @click="updateProfile" :disabled="uploading || !file">
          <template v-if="uploading">
            <span class="mr-1">Uploading...</span>
            <v-icon>mdi-loading</v-icon>
          </template>
          <template v-else>
            Save Changes
            <v-icon right>mdi-content-save</v-icon>
          </template>
        </v-btn>
      </v-card>
    </v-container>
  </template>
  
  <style>
  /* Add any custom styles here */
  
  /* Center the profile picture */
  .profile-picture {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
  
  /* Style the main heading */
  h1 {
    font-size: 28px;
    color: #333;
  }
  
  /* Style the subtitle */
  .subtitle {
    color: #666;
  }
  
  /* Add padding and margin to the cards */
  .v-card {
    padding: 20px;
    margin-bottom: 20px;
  }
  
  /* Add primary text color to the About Me section */
  .text--primary {
    color: #101010;
  }
  
  /* Style the Save Changes button */
  .v-btn {
    font-weight: bold;
  }
  
  /* Add margin to the Save Changes button icon */
  .v-btn i {
    margin-left: 8px;
  }
  </style>
  
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import axios from 'axios';
  import { useStore } from 'vuex';
  
  const file = ref(null);
  const imageUrl = ref(null);
  const uploading = ref(false);
  const store = useStore();
  
  const fileName = computed(() => file.value?.name);
  const fileExtension = computed(() => fileName.value?.substr(fileName.value?.lastIndexOf(".") + 1));
  const fileMimeType = computed(() => file.value?.type);
  
  const uploadFile = (event) => {
    file.value = event.target.files[0];
  };
  
  const formattedImageUrl = computed(() => {
    return imageUrl.value ? imageUrl.value.replace(/\\/g, '') : null;
  });
  
  // Fetch the user's profile data when the component is mounted
  onMounted(async () => {
    
    try {
      const accessToken = localStorage.getItem('auth-token');
      const endpoint = `http://127.0.0.1:8000/api/profile/${store.state.userId}`;
      const response = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      // Assign fetched data to respective data properties
      imageUrl.value = response.data.profile;
    } catch (error) {
      console.error(error);
    }
  });
  
  const updateProfile = async () => {
    if (!file.value) {
      return;
    }
  
    uploading.value = true;
  
    const formData = new FormData();
    formData.append('file', file.value);
    formData.append('fileName', fileName.value);
    formData.append('fileExtension', fileExtension.value);
    formData.append('fileMimeType', fileMimeType.value);
    formData.append('_method', 'PATCH');
  
    try {
      const accessToken = localStorage.getItem('auth-token');
      const endpoint = `http://127.0.0.1:8000/api/profile/${store.state.userId}`;
      const response = await axios.post(endpoint, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      imageUrl.value = response.data.image_url;
      
    } catch (error) {
      console.error(error);
    } finally {
      uploading.value = false;
    }
  };
  </script>
  
  <style>
  .profile {
    max-width: 800px;
    margin: auto;
    padding: 20px;
  }
  
  .profile-picture {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 20px;
  }
  
  .profile-footer {
    margin-top: 20px;
    text-align: center;
  }
  </style>