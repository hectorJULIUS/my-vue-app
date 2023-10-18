<template>
  <div>
    <v-card class="card">
      <v-card-text>
        <p>
          <strong>Why Pay the 1000 Commitment Fee?</strong>
        </p>
        <p>
          Paying the commitment fee helps support our services and ensures your spot is reserved. It's a small investment for peace of mind.
        </p>
      </v-card-text>
      <v-card-actions>
        <paystack
          buttonClass="button-class btn btn-primary"
          buttonText="CHECKOUT"
          :publicKey="publicKey"
          :email="email"
          :amount="Amount"
          :reference="reference"
          :onSuccess="onSuccessfulPayment"
          :onCancel="onCancelledPayment"
          :currency="'KES'"
        ></paystack>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import paystack from "vue3-paystack";
import { nanoid } from "nanoid";

export default {
  components: {
    paystack,
  },
  data: () => ({
    publicKey: 'pk_test_5e2d37b4179fe564100248b6f283a246ad441b63',
    Amount: 100000,
    email: '', // Initialize email to an empty string
    firstname: 'User', // Initialize username to a default value
    lastname: 'User',
  }),
  computed: {
    reference: function() {
      return nanoid(15);
    },
  },
  created() {
    // Fetch username and email from local storage
    const storedUsername = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('email');
    if (storedUsername && storedEmail) {
      this.firstname = storedUsername;
      this.email = storedEmail;
    }
  },
  methods: {
    payNow() {
      // Handle payment initiation if needed
    },
    onSuccessfulPayment() {
      const transactionNumber = nanoid(10); 
      localStorage.setItem('transactionNumber', transactionNumber);
    },
    onCancelledPayment() {
      // Handle canceled payment here
    },
  },
};
</script>



<style scoped>
.card {
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.pay-now-button {
  background-color: #009688;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin: 10px 0;
  transition: background-color 0.3s;
}

.pay-now-button:hover {
  background-color: #007a6d;
}
</style>
