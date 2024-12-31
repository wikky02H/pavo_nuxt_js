<!-- <template>
  <div class="pricing-card">
    <h3 class="plan-name">{{ planName?.toUpperCase() }}</h3>
    <p class="price">
      <span class="amount"
        ><span class="currency-symbol">$</span>{{ price }}</span
      >
    </p>
    <span class="price-unit">{{ priceUnit }}</span>
    <p class="description text-left">{{ description }}</p>

    <ul class="features-list">
      <li
        v-for="(feature, index) in features"
        :key="index"
        class="feature-item"
      >
        <img
          src="../assets/images/rightSolidArrow.svg"
          class="arrow-icon"
          alt="Dropdown Arrow"
        />
        <span class="feature-text">{{ feature }}</span>
      </li>
    </ul>

    <button class="download-btn">Download</button>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  planName: String,
  price: Number,
  priceUnit: String,
  description: String,
  features: Array,
})
</script>

<style scoped>
.pricing-card {
  background-color: #fff;
  border-radius: 7px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 3rem 1.75rem 2.25rem 1.75rem;
  text-align: center;
  width: 335px;
  position: relative;
  padding-bottom: 3rem;
  padding-right: 2.25rem;
  padding-left: 2.25rem;
}

.plan-name {
  margin-bottom: 1rem;
  color: #eb427e;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.875rem;
  text-align: center;
}

.price {
  font-size: 2rem;
  font-weight: 700;
}

.amount {
  color: #000;
}

.price-unit {
  color: #6b747b;
}

.description {
  font-size: 1rem;
  color: #6b747b;
  margin-bottom: 1.5rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
}

.features-list li {
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #6b747b;
  margin-bottom: 0.5rem;
}

.arrow-icon {
  width: 16px;
  height: 14px;
  margin-right: 8px;
}

.feature-text {
  font-size: 1rem;
  color: #6b747b;
}

.download-btn {
  background-color: #594cda;
  color: white;
  /* padding: 1.375rem 2.25rem 1.375rem 2.25rem; */
  padding: 1.2rem 5px;
  font-size: 0.875rem;
  font-weight: 600;
  border: 2px solid transparent;
  border-radius: 30px;
  line-height: 0;
  cursor: pointer;
  width: 40%;
  position: absolute;
  bottom: -1rem;
  left: 30%;
  transition: all 0.3s ease;
}

.download-btn:hover {
  background-color: white;
  color: #594cda;
  border-color: #594cda;
}

.currency-symbol {
  margin-right: 0.3rem;
  color: #252c38;
  font-size: 2rem;
  vertical-align: 20%;
}

.amount {
  color: #252c38;
  font-weight: 600;
  font-size: 5rem;
  line-height: 5rem;
  text-align: center;
}
</style>

   -->
<template>
  <div class="pricing-card">
    <h3 class="plan-name">{{ planName?.toUpperCase() }}</h3>
    <p class="price">
      <span class="amount"
        ><span class="currency-symbol">$</span>{{ price }}</span
      >
    </p>
    <span class="price-unit">{{ priceUnit }}</span>
    <p class="description text-left">{{ description }}</p>

    <ul class="features-list">
      <li
        v-for="(feature, index) in features"
        :key="index"
        class="feature-item"
      >
        <img
          src="../assets/images/rightSolidArrow.svg"
          class="arrow-icon"
          alt="Dropdown Arrow"
        />
        <span class="feature-text">{{ feature }}</span>
      </li>
    </ul>

    <!-- Button inside the pricing card, aligned at the bottom -->
    <button class="download-btn">Download</button>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  planName: String,
  price: Number,
  priceUnit: String,
  description: String,
  features: Array,
})
</script>

<style scoped>
.pricing-card {
  background-color: #fff;
  border-radius: 7px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 335px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 3rem 1.75rem 4.5rem 1.75rem; 
  position: relative;
  height: 100%;
}

.plan-name {
  margin-bottom: 1rem;
  color: #eb427e;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.875rem;
  text-align: center;
}

/* Price Styling */
.price {
  font-size: 2rem;
  font-weight: 700;
}

.amount {
  color: #000;
}

.price-unit {
  color: #6b747b;
}

/* Description Styling */
.description {
  font-size: 1rem;
  color: #6b747b;
  margin-bottom: 1.5rem;
}

/* Feature List Styling */
.features-list {
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
}

.features-list li {
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #6b747b;
  margin-bottom: 0.5rem;
}

.arrow-icon {
  width: 16px;
  height: 14px;
  margin-right: 8px;
}

.feature-text {
  font-size: 1rem;
  color: #6b747b;
}

/* Button Styling */
.download-btn {
  background-color: #594cda;
  color: white;
  padding: 1.2rem 5px;
  font-size: 0.875rem;
  font-weight: 600;
  border: 2px solid transparent;
  border-radius: 30px;
  line-height: 0;
  cursor: pointer;
  width: 50%; /* Default width to 50% */
  margin: 0 auto;
  transition: all 0.3s ease;
  /* margin-bottom: 1.25rem; Space between the button and card's bottom border */
  align-self: flex-end; /* Ensure button sticks to the bottom of the card */
}

/* Hover Effect for Button */
.download-btn:hover {
  background-color: white;
  color: #594cda;
  border-color: #594cda;
}

/* Currency Symbol */
.currency-symbol {
  margin-right: 0.3rem;
  color: #252c38;
  font-size: 2rem;
  vertical-align: 20%;
}

/* Amount Styling */
.amount {
  color: #252c38;
  font-weight: 600;
  font-size: 5rem;
  line-height: 5rem;
  text-align: center;
}

/* Responsive Styles */

/* For Tablets and Smaller Devices (max-width: 768px) */
@media (max-width: 768px) {
  .pricing-card {
    width: 90%; /* Card width 90% of screen */
    padding: 2rem 1.25rem 4rem 1.25rem; /* Adjust padding */
  }

  .plan-name {
    font-size: 1.25rem; /* Smaller font size for plan name */
  }

  .price {
    font-size: 1.75rem; /* Smaller price font */
  }

  .amount {
    font-size: 3.5rem; /* Smaller amount font */
  }

  .download-btn {
    font-size: 0.75rem; /* Smaller button text */
    width: 17%; /* Button width 60% of the card */
    padding: 0.75rem 1.5rem; /* Adjust button padding */
  }
}

/* For Mobile Screens (max-width: 480px) */
@media (max-width: 480px) {
  .pricing-card {
    width: 95%; /* Card width 95% of screen */
    padding: 1.5rem 1.25rem 3.5rem 1.25rem; /* Adjust padding for mobile */
  }

  .plan-name {
    font-size: 1.125rem; /* Smaller font size for plan name */
  }

  .price {
    font-size: 1.5rem; /* Smaller price font */
  }

  .amount {
    font-size: 3rem; /* Even smaller amount font */
  }

  .download-btn {
    font-size: 0.5rem; /* Smaller button text */
    width: 32%; /* Button width increases to 70% of the card */
    padding: 0.5rem 1rem; /* Adjust button padding */
  }
}
</style>
