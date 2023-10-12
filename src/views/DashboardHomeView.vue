<template>
  <div>
    <v-card class="payment-card">
      <v-card-title class="payment-heading">M-Pesa Payment</v-card-title>
      <v-card-text>
        <div class="input-group">
          <label for="phoneNumber" class="input-label">Phone Number:</label>
          <input type="text" id="phoneNumber" class="input-field" v-model="phoneNumber" />
        </div>
        <div class="input-group">
          <label for="amount" class="input-label">Amount (USD):</label>
          <input type="text" id="amount" class="input-field" v-model="usdAmount" />
        </div>
        <div class="amount-display">
          Amount (KES): {{ kesAmount }}
        </div>
        <button @click="generateQRCode" class="payment-button">Generate QR Code</button>
        <div v-if="qrCode" class="qr-code">
          <img :src="qrCode" alt="QR Code" />
        </div>
        
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import QRCode from 'qrcode-generator';

export default {
  data() {
    return {
      phoneNumber: '',
      usdAmount: '', // Input in USD
      qrCode: null,
    };
  },
  computed: {
    kesAmount() {
      // Convert USD to KES using the exchange rate (1 USD = 150 KES)
      return (parseFloat(this.usdAmount) * 150).toFixed(2);
    },
  },
  methods: {
    generateQRCode() {
      const qr = new QRCode(0, 'H');
      qr.addData(`M-Pesa Payment: ${this.kesAmount} KES`);
      qr.make();
      const qrData = qr.createDataURL(6);
      this.qrCode = qrData;
    },
  },
};
</script>

<style scoped>
.payment-card {
  max-width: 400px;
  margin: 0 auto;
}

.payment-heading {
  font-size: 24px;
  color: #009688; /* Choose your preferred color */
  text-align: center;
}

.input-group {
  margin-bottom: 20px;
}

.input-label {
  display: block;
  font-size: 16px;
  color: #333;
}

.input-field {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

.payment-button {
  background-color: #009688; /* Choose your preferred color */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  display: block;
  margin: 0 auto;
}

.payment-button:hover {
  background-color: #007a6d; /* Hover color */
}

.qr-code {
  text-align: center;
}

.qr-code img {
  max-width: 100%;
}

.amount-display {
  font-size: 18px;
  text-align: center;
}
</style>
