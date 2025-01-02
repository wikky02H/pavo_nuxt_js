<template>
  <div class="pricingStyles">
    <h2>Pricing options for all budgets</h2>
    <p class="mb-16 text-white lg:max-w-3xl lg:mx-auto">
      Our pricing plans are set up in such a way that any user can start
      enjoying Pavo without worrying so much about costs. They are flexible and
      work for any type of industry.
    </p>
    <div class="pricing-cards-container">
      <PricingCard
        v-for="(plan, index) in pricingPlans"
        :key="index"
        :planName="plan.planName"
        :price="plan.price"
        :priceUnit="plan.priceUnit"
        :description="plan.description"
        :features="plan.features"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { pricingPlans } from '~/constants/dataSets'
</script>

<style scoped>
.pricingStyles {
  background:
    linear-gradient(rgba(50, 60, 70, 0.9), rgba(50, 60, 70, 0.9)),
    url('../pricing/pricingBg.jpg') center center no-repeat;
  background-size: cover;
  color: white;
  text-align: center;
  height: 128vh;
  padding-top: 5rem;
  position: relative; /* Ensure elements stay within bounds */
  padding-bottom: 2rem; /* To ensure the last card fits in */
}

.pricingStyles h2 {
  margin-bottom: 1.25rem;
  font-size: 2.125rem;
  line-height: 2.625rem;
  letter-spacing: -0.4px;
}

.pricingStyles p {
  max-width: 48rem;
  margin: 0 auto;
  color: #6b747b;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.625rem;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
}

.pricing-cards-container {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  flex-wrap: wrap;
  margin-top: 4rem;
  padding-bottom: 2rem; /* Ensure space at bottom */
  max-width: 100%;
}

/* Tablet view (768px and below) */
@media (max-width: 768px) {
  .pricingStyles {
    padding-top: 4rem;
    height: 563vh;
  }

  .pricingStyles h2 {
    font-size: 1.75rem;
  }

  .pricingStyles p {
    font-size: 0.875rem;
    padding: 0 1rem;
  }

  .pricing-cards-container {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding-bottom: 5rem; /* Added padding to fit last card */
  }

  .pricing-card {
    width: 90%; /* Ensure pricing cards fit well */
    padding: 2rem 1.25rem 4rem 1rem;
    /* margin-top: 3rem; */
  }
  .pricing-card:not(:first-child) {
    margin-top: 3rem; /* Adjust this value as needed */
  }
}

/* Mobile view (480px and below) */
@media (max-width: 480px) {
  .pricingStyles {
    padding-top: 3.5rem;
    height: 590vh;
  }

  .pricingStyles h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .pricingStyles p {
    font-size: 0.875rem;
    padding: 0 1rem;
  }

  .pricing-cards-container {
    gap: 1rem;
    padding-bottom: 5rem; /* Additional padding for mobile */
  }

  .pricing-card {
    width: 90%;
    padding: 1.5rem 1.25rem 3.5rem 1rem;
  }
  .pricing-card > ::after {
    margin-top: 2.5rem;
  }
}
</style>
