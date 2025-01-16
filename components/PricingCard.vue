<template>
  <div class="pricing-card">
    <div class="pricing-card-body">
      <h3 class="plan-name">{{ planName?.toUpperCase() }}</h3>
      <div class="price">
        <p class="amount flex items-center justify-center">
          <span class="currency-symbol">$</span>{{ price }}
        </p>
      </div>
      <p class="price-unit !mt-4">{{ priceUnit }}</p>
      <p class="description text-left">{{ description }}</p>
      <ul class="features-list">
        <li
          v-for="(feature, index) in features"
          :key="index"
          class="flex justify-start items-start"
        >
          <div class="flex items-center h-full">
            <img
              src="../assets/images/rightSolidArrow.svg"
              class="arrow-icon"
              alt="Dropdown Arrow"
            />
          </div>
          <p class="feature-text md:whitespace-nowrap text-left">
            {{ feature }}
          </p>
        </li>
      </ul>

      <button class="download-btn">Download</button>
    </div>
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
  position: relative;
  display: block;
  background-color: #ffffff;
  max-width: 330px;
  margin-right: auto;
  margin-bottom: 2rem;
  margin-left: auto;
  border: 1px solid #bcc4ca;
  border-radius: 8px;
}

@media (min-width: 700px) {
  .pricing-card {
    margin-bottom: 6rem;
  }
  .pricing-card-body {
    padding: 3rem 2.25rem 3rem 2.25rem;
  }
}
.plan-name {
  margin-bottom: 1rem;
  color: #eb427e;
  font-weight: 700;
  font-size: 1.5rem;
  padding-bottom: 30px;
}

.price {
  font-size: 2rem;
  font-weight: 700;
}

.amount {
  color: #000;
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
    /* width: 90%; */
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
  .price-unit {
  color: #6b747b;
}
}
</style>
