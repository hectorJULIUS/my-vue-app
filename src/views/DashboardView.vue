<template>
    <h1 style="text-align: center;border: 2px solid grey; box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); padding: 20px; color: black;">WELCOME YOUR DASHBOARD</h1>
    <div class="dashboard">
    <ul class="menu">
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Statements</a></li>
        <li><a href="#">Reports</a></li>
        <li><a href="#">Logout</a></li>
    </ul>
    </div>

</template>

<script>
export default{
    name: 'DashboardView'
}
</script>

<style scoped>
/* Reset default styles for ul and li */
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

/* Style the dashboard container */
.dashboard {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 0px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  width: 200px;
}

/* Style the menu items */
.menu li {
  margin-bottom: 10px;
}

.menu li a {
  display: block;
  padding: 10px;
  color: #333;
  text-decoration: none;
  border-radius: 3px;
  transition: background-color 0.3s ease;
}

/* Hover effect for menu items */
.menu li a:hover {
  background-color: #e0e0e0;
}


</style>

<style scoped>

</style>