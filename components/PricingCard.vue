<template>
  <div class="pricing-card">
    <h3 class="plan-name">{{ planName?.toUpperCase() }}</h3>
    <p class="price">
      <span class="amount">
        <span class="currency-symbol">$</span>{{ price }}
      </span>
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
  text-align: center;
  width: 335px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 3rem 1.75rem 2.5rem 1.75rem;
  position: relative;
  height: 100%;
  overflow: visible;
}

.plan-name {
  margin-bottom: 1rem;
  color: #eb427e;
  font-weight: 700;
  font-size: 1.5rem;
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
  padding: 0.8rem 2.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  border: 2px solid transparent;
  border-radius: 30px;
  line-height: 1;
  cursor: pointer;
  position: absolute;
  bottom: -1.5rem;
  left: 50%;
  transform: translateX(-50%);
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
}

.amount {
  color: #252c38;
  font-weight: 600;
  font-size: 5rem;
}

@media (max-width: 768px) {
  .pricing-card {
    width: 90%;
    padding: 2rem 1.25rem 4rem 1.25rem;
  }

  .plan-name {
    font-size: 1.25rem;
  }

  .price {
    font-size: 1.75rem;
  }

  .amount {
    font-size: 3.5rem;
  }

  .download-btn {
    font-size: 0.75rem;
    padding: 0.75rem 1.5rem;
    margin-bottom: 10px;

  }
}

@media (max-width: 480px) {
  .pricing-card {
    width: 95%;
    padding: 1.5rem 1.25rem 3.5rem 1.25rem;
  }

  .plan-name {
    font-size: 1.125rem;
  }

  .price {
    font-size: 1.5rem;
  }

  .amount {
    font-size: 3rem;
  }

  .download-btn {
    font-size: 0.75rem;
    padding: 0.5rem 1rem;
    margin-bottom: 10px;
  }
}
</style>
