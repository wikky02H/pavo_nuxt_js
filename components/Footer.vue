<template>
  <div class="footer">
    <h4 class="footer_content">
      Pavo is a mobile application for marketing automation and you can reach
      the team at
      <a href="mailto:email@domain.com" class="text-black hover:text-gray-500">
        email@domain.com
      </a>
      <div class="social-container">
        <span
          class="fa-stack"
          v-for="(social, index) in socialLinks"
          :key="index"
        >
          <a :href="social.link" class="social-icon">
            <i :class="['fab', social.icon, 'fa-stack-1x']"></i>
          </a>
        </span>
      </div>
    </h4>
    <FooterBar />
  </div>
</template>

<script setup lang="ts">
import { socialLinks } from '~/constants/dataSets'
</script>

<style scoped>
.footer {
  padding-top: 6rem;
  padding-bottom: 3rem;
  background: linear-gradient(rgba(255, 255, 255, 1), rgba(197, 234, 249, 1));
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
}

.footer_content {
  max-width: 48rem;
  font-size: 22px;
  font-weight: 900;
  font-family: 'Open Sans', sans-serif;
  margin: 0 auto;
  padding: 32px;
  line-height: 1.3;
}

a {
  text-decoration: none;
}

.social-container {
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.social-container .social-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  transition: all 0.3s ease;
  color: #252c38;
  font-size: 20px;
  text-align: center;
  margin-left: 1px;
}

.social-container .social-icon:hover {
  background-color: #252c38;
  color: white;
}

.fab {
  line-height: inherit;
}

@media (max-width: 768px) {
  .footer_content {
    font-size: 18px;
    padding: 24px;
  }

  .social-container .social-icon {
    width: 45px;
    height: 45px;
    font-size: 18px;
  }
  /* .footer{
    margin-bottom: none;
  } */
}

@media (max-width: 480px) {
  .footer_content {
    font-size: 16px;
    padding: 16px;
  }

  .social-container {
    justify-content: center;
    gap: 5px;
  }

  .social-container .social-icon {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }

  /* .footer{
    margin-bottom: none;
  } */
}
</style>
