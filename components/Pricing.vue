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
}

.pricingStyles h2 {
  padding-top: 8rem;
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
  margin-bottom: 0.625rem;
  font-weight: 700;
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
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}
.pricing-cards-container {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  flex-wrap: wrap;
  margin-top: 4rem;
}

@media (max-width: 768px) {
  .pricingStyles h2 {
    font-size: 2rem;
  }

  .pricingStyles p {
    font-size: 1rem;
    padding: 0 1rem;
  }
}
</style>
