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

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';

const file = ref(null);
const imageUrl = ref(null);
const uploading = ref(false);
const store = useStore();

const fileName = computed(() => file.value?.name);
const fileExtension = computed(() => fileName.value?.split('.').pop());
const fileMimeType = computed(() => file.value?.type);

const uploadFile = (event) => {
  file.value = event.target.files[0];
};

const formattedImageUrl = computed(() => imageUrl.value?.replace(/\\/g, ''));

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

<style scoped>
.profile {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.profile-picture {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #007BFF;
  margin-bottom: 20px;
}

.profile-footer {
  text-align: center;
  background-color: #f2f2f2;
  padding: 20px 0;
  border-top: 1px solid #ccc;
}

.file-input {
  display: none;
}

.upload-button {
  background-color: #007BFF;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.upload-button:hover {
  background-color: #0056b3;
}

.about-me {
  font-size: 16px;
}

.work-experience {
  font-size: 18px;
  margin-top: 20px;
}

.work-experience-title {
  font-weight: bold;
  margin-bottom: 10px;
}

.work-experience-details {
  margin-bottom: 20px;
}

/* Add more specific styles if needed */
</style>
