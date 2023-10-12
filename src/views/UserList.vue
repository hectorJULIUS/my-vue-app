<template>
  <div>
    <h2>List of Users</h2>
    <ul>
      <li v-for="user in users" :key="user.id">{{ username }}</li>
      <li v-for="user in users" :key="user.id">{{ email }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      axios.get('http://localhost:8000/api/user')
        .then(response => {
          this.users = response.data;
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    },
  },
};
</script>


