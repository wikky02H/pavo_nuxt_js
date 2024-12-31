<template>
  <div class="container basic mt-24">
    <!-- Left side: Image Section -->
    <div class="image-section">
      <img src="../public/download/smartphone.png" alt="Details Image" />
    </div>

    <!-- Right side: Text and Buttons Section -->
    <div class="text-section">
      <p class="mb-9 text1">
        Team management mobile applications don’t get much better than Pavo.
        Download it today.
      </p>
      <div class="social-icons flex space-x-3 justify-center sm:justify-start">
        <!-- Apple Download Button -->
        <a
          href="#apple"
          class="flex items-center justify-center px-8 py-3 bg-indigo-600 border border-indigo-600 text-white rounded-[40px] text-[12px] cursor-pointer hover:bg-transparent hover:text-indigo-600 hover:border-indigo-600 transition-colors duration-300 ease-in-out font-semibold"
        >
          <i class="fab fa-apple mr-2 text-[20px]"></i>
          Download
        </a>

        <!-- Android Download Button -->
        <a
          href="#android"
          class="flex items-center justify-center px-8 py-3 bg-[#eb427e] border border-[#eb427e] text-white rounded-[40px] text-[12px] cursor-pointer hover:bg-transparent hover:text-[#eb427e] hover:border-[#eb427e] transition-colors duration-300 ease-in-out font-semibold"
        >
          <i class="fab fa-google-play mr-2 text-[20px]"></i>
          Download
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
}

.text1 {
  line-height: 2.5rem;
  font: 400 1rem/1.625rem 'Open Sans', sans-serif;
  margin: 0 0 2rem !important;
  font-size: 1.875rem;
  line-height: 2.5rem;
  --tw-text-opacity: 1;
  color: rgba(31, 41, 55, var(--tw-text-opacity));
}

.image-section img {
  width: 100%;
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

.text-section {
  flex: 1;
  max-width: 50%;
}

.text-section p {
  color: #333;
  margin-bottom: 1rem;
}

.social-icons a {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
}

.social-icons a i {
  margin-right: 8px;
}

.basic {
  background: url('../public/download/backgroundImage.jpg') center center no-repeat;
  background-size: cover;
  padding: 4rem;
}

@media (max-width: 1024px) {
  /* Tablets */
  .container {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }

  .text1 {
    font-size: 30px; /* Adjusted for tablets */
  }

  .text-section {
    max-width: 100%;
    margin-top: 2rem;
  }

  .image-section img {
    max-width: 80%;
    margin-bottom: 2rem;
  }

  .social-icons {
    flex-direction: column;
    gap: 10px;
  }

  .social-icons a {
    padding: 12px 20px;
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  /* Mobile (Phones) */
  .container {
    flex-direction: column;
    text-align: center;
    gap: 20px;
    margin: 0; /* Reset margin on container for mobile */
    padding: 20px; /* Reset padding if necessary */
  }

  .basic {
    background: none;
    padding: 1rem; /* Reduced padding to remove large gaps */
  }

  .text-section {
    max-width: 100%;
    margin-top: 1rem;
    font-size: 1.5rem; /* Adjust font size for mobile */
  }

  .image-section img {
    max-width: 70%;
    margin-bottom: 1rem;
  }

  .social-icons {
    flex-direction: row; /* Ensure buttons are horizontally aligned */
    gap: 16px; /* Increase the space between buttons */
    justify-content: center; /* Center the buttons horizontally */
    align-items: center; /* Ensure vertical alignment */
  }

  .social-icons a {
    padding: 13px 30px; /* Ensure padding is consistent */
    font-size: 16px; /* Slightly larger font for mobile */
  }
}

@media (max-width: 480px) {
  /* Extra small screens (small mobile phones) */
  .text1 {
    line-height: 2.5rem;
    font-size: 1.5rem; /* Adjust font size for very small screens */
  }
  .container {
    flex-direction: column;
    text-align: center;
    gap: 10px;
    margin: 0; /* Reset margin on container for mobile */
    padding: 10px; /* Reset padding if necessary */
  }
  .social-icons a {
    padding: 10px 16px; /* Reduce padding */
    font-size: 14px; /* Keep font size readable for very small screens */
  }

  .image-section img {
    max-width: 100%; /* Reduce image size for very small screens */
    margin-top: 10rem;
    margin-bottom: 1rem;
  }

  .social-icons {
    flex-direction: column; /* Ensure buttons are stacked vertically */
    row-gap: 10px; /* Increase the space between buttons */
    justify-content: center; /* Center the buttons horizontally */
    align-items: center; /* Ensure vertical alignment */
    margin-left: 0 !important; /* Remove any left margin */
  }

  .social-icons a {
    padding: 13px 30px; /* Ensure padding is consistent */
    font-size: 16px; /* Slightly larger font for mobile */
  }
}
</style>
