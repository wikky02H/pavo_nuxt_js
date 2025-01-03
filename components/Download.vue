<template>
  <div class="container basic mt-24">
    <!-- Left side: Image Section -->
    <div class="image-section">
      <img src="../public/download/smartphone.png" alt="Details Image" />
    </div>

    <!-- Right side: Text and Buttons Section -->
    <div class="text-sectionfeatures">
      <p class="mb-9 text1">
        Team management mobile applications don’t get much better than Pavo.
        Download it today.
      </p>
      <div class="social-icons">
        <!-- Apple Download Button -->
        <a href="#apple" class="download-btn apple-btn">
          <i class="fab fa-apple mr-2"></i>
          Download
        </a>

        <!-- Android Download Button -->
        <a href="#android" class="download-btn android-btn">
          <i class="fab fa-google-play mr-2"></i>
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
  flex-wrap: wrap; /* Ensure wrapping on smaller screens */
  width: 100%;
}

.text1 {
  font-size: 1.875rem; /* Base font size */
  line-height: 2.5rem;
  color: #1f2937;
  margin-bottom: 2rem;
}

.image-section img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

.text-section {
  flex: 1;
  max-width: 50%;
}

.social-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.download-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 40px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.apple-btn {
  background-color: #4f46e5;
  color: #fff;
  border: 1px solid #4f46e5;
}

.apple-btn:hover {
  background-color: transparent;
  color: #4f46e5;
}

.android-btn {
  background-color: #eb427e;
  color: #fff;
  border: 1px solid #eb427e;
}

.android-btn:hover {
  background-color: transparent;
  color: #eb427e;
}

.basic {
  background: url('../public/download/backgroundImage.jpg') center center
    no-repeat;
  background-size: cover;
  padding: 4rem;
}
/* Responsive Styles */
@media (max-width: 1024px) {
  .container {
    flex-direction: column;
    text-align: center;
  }

  .text-section {
    max-width: 100%;
  }

  .text1 {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .social-icons {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .basic {
    padding: 2rem;
    background: none;
  }

  .text1 {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  .image-section img {
    max-width: 80%;
  }
}

@media (max-width: 480px) {
  .text1 {
    font-size: 1.875rem;
    line-height: 2.5rem;
    color: gray;
  }

  .container {
    gap: 10px;
    padding: 1rem !important;
  }

  .image-section img {
    max-width: 100%;
  }

  .social-icons {
    flex-direction: column;
    align-items: center;
  }

  .download-btn {
    width: 50%;
    max-width: 250px;
    padding: 10px 16px;
    gap: 2px;
  }
  .text-section {
    max-width: auto;
  }
}
</style>
