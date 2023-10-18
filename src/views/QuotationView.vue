<template>
  <div class="split-card">
    <div class="quotation-container">
      <h1 class="quotation-heading">Price Quotation Generator</h1>
      <form id="quotation-form">
        <div class="form-group">
          <label for="category">Category:</label>
          <select v-model="category" class="select-box" id="category">
            <option value="painting">Painting</option>
            <option value="plumbing">Plumbing</option>
            <option value="lighting">Lighting</option>
          </select>
        </div>

        
        <div class="form-group">
          <label for="quantity">Quantity/Number of lights/Number of Walls</label>
          <input type="number" id="quantity" v-model="quantity" min="0" class="input-box" @input="calculateTotal" />
        </div>

        <div class="form-group">
          <label for="price-per-unit">Price per Unit (Default: $100):</label>
          <input type="number" id="price-per-unit" v-model="pricePerUnit" min="0" class="input-box" @input="calculateTotal" />
        </div>

        <button @click="generatePDF" class="pdf-button">Generate PDF</button>
      </form>
      <div id="quotation-summary" class="quotation-summary">Total: ${{ total.toFixed(2) }}</div>
    </div>
  </div>
</template>

<script>
import jsPDF from 'jspdf';

export default {
  data() {
    return {
      category: 'Painting',
      quantity: 0,
      pricePerUnit: 100,
      total: 0,
    };
  },
  methods: {
    calculateTotal() {
      this.total = this.quantity * this.pricePerUnit;
    },
    generatePDF() {
      const doc = new jsPDF();

      doc.setFont('helvetica');
      doc.setFontSize(14);
      doc.setTextColor(50, 50, 50);

      doc.text('County Wide Property Management', 105, 15, null, null, 'center');
      doc.setFontSize(18);
      doc.text('Job Quotation', 105, 30, null, null, 'center');
      
      const textX = 20;
      const startY = 60;
      const lineSpacing = 10;

      const category = this.category;
      const quantity = this.quantity;
      const pricePerUnit = this.pricePerUnit;


      doc.setFontSize(14);
      doc.text(`Category: ${category}`, textX, startY);
      doc.text(`Quantity: ${quantity}`, textX, startY + lineSpacing);
      doc.text(`Price per Unit: $${pricePerUnit.toFixed(2)}`, textX, startY + 2 * lineSpacing);
      doc.text(`Total: $${this.total.toFixed(2)}`, textX, startY + 3 * lineSpacing);


      const filename = `quotation_${Date.now()}.pdf`;
      doc.save(filename);
    },
    
  },
};
</script>
  
<style scoped>

.paragraph-section {
  background-color: #f3f3f3;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  text-align: center;
  margin:20px;
}

.message {
  margin: 0;
}

.highlight {
  font-weight: bold;
  color: #007BFF;
}

.discount {
  font-weight: bold;
  color: #28A745;
}

.calculate-button {
  display: inline-block;
  background-color: #007BFF;
  color: #fff;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  text-decoration: none;
  cursor: pointer;
}

.calculate-button:hover {
  background-color: #0056b3;
}

.router-link-exact-active {
  text-decoration: none;
}

.split-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
}

.quotation-container {
  flex: 1;
  margin-right:40px;
  padding: 20px;
  background-color: #f0f0f0;

}

.paragraph-section {
  flex: 1;
  padding: 20px;
  background-color: #e0e0e0;
}


  .quotation-card {
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  text-align: center;
  width: 300px;
  margin: 0 auto;
}

.quotation-heading {
  font-size: 24px;
  margin-bottom: 20px;
  color: #009688;
}

.form-group {
  margin: 10px 0;
  text-align: left;
}

.label {
  font-weight: bold;
  margin-right: 10px;
}

.select-box, .input-box {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.calculate-button, .pdf-button {
  background-color: #009688;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin: 10px 0;
}

.calculate-button:hover, .pdf-button:hover {
  background-color: #007a6d;
}

.summary-heading {
  font-size: 18px;
  margin: 20px 0;
  color: #555;
}

.quotation-summary {
  font-size: 24px;
  color: #009688;
}
  </style>
  