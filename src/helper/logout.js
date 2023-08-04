// logoutHelper.js
import store from './store'
import { router } from '../router/index'; 


function handleLogin() {
  // Perform login process here, e.g., verify credentials.

  // If login is successful, call the `login` action to set isLoggedIn to true.
  store.dispatch('login');
}
