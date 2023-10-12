<template>
  
      
  <table class="calendar">
    <thead>
      <tr>
        <th colspan="7">October 2023</th>
      </tr>
      <tr>
        <th>Sun</th>
        <th>Mon</th>
        <th>Tue</th>
        <th>Wed</th>
        <th>Thu</th>
        <th>Fri</th>
        <th>Sat</th>
      </tr>
    </thead>
    <tbody id="calendar-body">
    </tbody>
  </table>

  <div class="user-details">
  <h2>Your Details</h2>
  <div class="user-details-container">
    <div class="user-detail">
      <label>Username:</label>
      <span>{{ username }}</span>
    </div>
    <div class="user-detail">
      <label>Email:</label>
      <span>{{ email }}</span>
    </div>
  </div>
</div>



</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const username = ref('');
const email = ref('');

async function fetchUserDetails() {
  const token = localStorage.getItem('auth-token');
  console.log(token);

  try {
    const response = await axios.get('http://localhost:8000/api/user', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log(response);
    username.value = response.data.details.username;
    email.value = response.data.details.email;
  } catch (error) {
    console.error(error);
  }
  const calendarBody = document.getElementById('calendar-body');
    const daysInMonth = 31; // Replace with the actual number of days in the month

    // Function to generate the calendar
    function generateCalendar() {
      let dayCounter = 1;
      let html = '';

      for (let week = 0; week < 5; week++) {
        html += '<tr>';

        for (let day = 0; day < 7; day++) {
          if (dayCounter <= daysInMonth) {
            html += `<td>${dayCounter}</td>`;
            dayCounter++;
          } else {
            html += '<td></td>';
          }
        }

        html += '</tr>';
      }

      calendarBody.innerHTML = html;
    }

    generateCalendar();

}

onMounted(() => {
  fetchUserDetails();
});
</script>


  <style scoped>
    .calendar {
      font-family: Arial, sans-serif;
      border-collapse: collapse;
      width: 300px;
    }

    .calendar th, .calendar td {
      border: 1px solid #ddd;
      text-align: center;
      padding: 10px;
    }

    .calendar th {
      background-color: #009688;
      color: #fff;
    }

    .calendar td {
      cursor: pointer;
    }

    .calendar td:hover {
      background-color: #e6e6e6;
    }

    .calendar .current-month {
      background-color: #f2f2f2;
    }

    .calendar .today {
      background-color: #ff6666;
    }

    .user-details {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  text-align: center;
  width: 300px;
  margin: 0 auto;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.user-details-container {
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 20px;
  margin: 10px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: left;
}

.user-detail {
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #555;
  margin: 10px 0;
}

label {
  font-weight: bold;
  margin-right: 10px;
}

span {
  flex-grow: 1;
  color: #009688;
  font-weight: bold;
}
  
  /* Add additional styling as needed */
  </style>
  