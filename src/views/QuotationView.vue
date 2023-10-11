<template>
    <div class="quotation-container">
      <h1 class="quotation-heading">Job Quotation Generator</h1>
      <form id="quotation-form">
        <div class="form-group">
          <label for="category">Category:</label>
          <select v-model="category" class="select-box">
            <option value="painting">Painting</option>
            <option value="plumbing">Plumbing</option>
            <option value="lighting">Lighting</option>
            <!-- Add more category options here -->
          </select>
        </div>
        <div class="form-group">
          <label for="quantity">Quantity:</label>
          <input type="number" id="quantity" v-model="quantity" min="0" class="input-box">
        </div>
        <div class="form-group">
          <label for="price-per-unit">Price per Unit:</label>
          <input type="number" id="price-per-unit" v-model="pricePerUnit" min="0" class="input-box">
        </div>
        <button @click="calculateTotal" class="calculate-button">Calculate Total</button>
      </form>
      <h2 class="summary-heading">Quotation Summary</h2>
      <div id="quotation-summary" class="quotation-summary">Total: ${{ total.toFixed(2) }}</div>
      <button @click="generatePDF" class="pdf-button">Generate PDF</button>
    </div>
  </template>
  
  
  <script>
  import jsPDF from 'jspdf';
  
  export default {
    data() {
      return {
        category: 'painting',
        quantity: 0,
        pricePerUnit: 0,
        total: 0,
      };
    },
    methods: {
      calculateTotal() {
        this.total = this.quantity * this.pricePerUnit;
      },
      generatePDF() {
        const doc = new jsPDF();
  
        // Add content to the PDF
        doc.setFontSize(14);
        doc.text('Job Quotation', 10, 10);
  
        // Retrieve category, quantity, and price from data properties
        const category = this.category;
        const quantity = this.quantity;
        const pricePerUnit = this.pricePerUnit;
  
        // Calculate total
        const total = quantity * pricePerUnit;
  
        // Add item details to the PDF
        doc.setFontSize(12);
        doc.text(`Category: ${category}`, 10, 30);
        doc.text(`Quantity: ${quantity}`, 10, 40);
        doc.text(`Price per Unit: $${pricePerUnit.toFixed(2)}`, 10, 50);
        doc.text(`Total: $${total.toFixed(2)}`, 10, 60);
  
        // Save the PDF with a unique name (e.g., timestamp)
        const filename = `quotation_${Date.now()}.pdf`;
        doc.save(filename);
      },
    },
  };
  </script>
  
  <style scoped>
  .quotation-container {
    text-align: center;
    padding: 20px;
  }
  
  .quotation-heading {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin: 10px 0;
  }
  
  .select-box, .input-box {
    padding: 8px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .calculate-button, .pdf-button {
    background-color: black;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .calculate-button:hover, .pdf-button:hover {
    background-color: black;
  }
  
  .summary-heading {
    font-size: 20px;
    margin-top: 20px;
  }
  
  .quotation-summary {
    font-size: 18px;
    margin: 10px 0;
  }
  </style>
  