<template>
    <div class="footer mb-8">
      <h4 class="footer_content">
        Pavo is a mobile application for marketing automation and you can reach
        the team at
        <a href="mailto:email@domain.com" class="text-black hover:text-gray-500">
          email@domain.com
        </a>
        <div class="social-container">
          <!-- Loop through socialLinks to create icons dynamically -->
          <span class="fa-stack" v-for="(social, index) in socialLinks" :key="index">
            <a :href="social.link" class="social-icon">
              <i :class="['fab', social.icon, 'fa-stack-1x']"></i>
            </a>
          </span>
        </div>
        <!-- <FooterBar /> -->
      </h4>
    </div>
  </template>
  
  <script setup lang="ts">
  import { socialLinks } from '~/constants/dataSets'
  </script>
  
  <style scoped>
  /* Footer container styles */
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
  
  /* Footer text styles */
  .footer_content {
    max-width: 48rem;
    font-size: 22px;
    font-weight: 900;
    font-family: 'Open Sans', sans-serif;
    margin: 0 auto;
    padding: 32px;
    line-height: 1.3;
  }
  
  /* Link styles */
  a {
    text-decoration: none;
  }
  
  /* Social container - styles for flexbox layout */
  .social-container {
    display: flex;
    justify-content: center;
    gap: 5px; /* Added more spacing between icons */
    margin-top: 2rem;
    flex-wrap: wrap; /* Ensure icons wrap when on smaller screens */
  }
  
  /* Social icon styles */
  .social-container .social-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: white; /* Default white background */
    border-radius: 50%; /* Circle shape */
    transition: all 0.3s ease; /* Smooth transition for hover effect */
    color: #252c38; /* Default black icon color */
    font-size: 20px; /* Icon size */
    text-align: center;
    margin-left: 1px;
  }
  
  /* Hover effect */
  .social-container .social-icon:hover {
    background-color: #252c38;
    color: white;
  }
  
  .fab {
    line-height: inherit;
  }
  
  /* Responsive styles */
  
  /* For tablets and above (screen width 768px and up) */
  @media (max-width: 768px) {
    .footer_content {
      font-size: 18px; /* Slightly smaller font for medium screens */
      padding: 24px; /* Reduced padding */
    }
  
    /* Social icons for tablets */
    .social-container .social-icon {
      width: 45px;
      height: 45px;
      font-size: 18px; /* Slightly smaller icons */
    }
  }
  
  /* For smaller screens (max-width 480px) */
  @media (max-width: 480px) {
    .footer_content {
      font-size: 16px; /* Smaller text on very small screens */
      padding: 16px; /* Further reduced padding for smaller devices */
    }
  
    /* Social icons for mobile devices */
    .social-container {
      justify-content: center;
      gap: 5px; /* Adjust space between icons */
    }
  
    .social-container .social-icon {
      width: 40px; /* Smaller icons for mobile */
      height: 40px;
      font-size: 16px; /* Reduce icon size for mobile */
    }
  }
  </style>
