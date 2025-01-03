<template>
  <div class="backgroundColor">
    <div class="content-container">
      <h1 class="mb-5 text-[2.975rem] font-bold leading-[3.5rem] lg:pt-32">
        Team management mobile application
      </h1>
      <p class="text-xl font-light mb-8 text-[#6b747b]">
        Start getting things done together with your team based on Pavo's
        revolutionary team management features.
      </p>
      <div class="social-icons flex space-x-3 sm:space-x-0">
        <a
          href="#apple"
          class="flex items-center justify-center px-6 py-2 bg-indigo-600 text-white rounded-[30px] text-lg cursor-pointer hover:bg-transparent hover:border-indigo-600 hover:text-indigo-600 hover:shadow-lg border border-transparent transition-all duration-300 ease-in-out"
        >
          <i class="fab fa-apple mr-2"></i>
          Download
        </a>

        <a
          href="#android"
          class="flex items-center justify-center px-6 py-2 bg-pink-500 text-white rounded-[30px] text-lg cursor-pointer hover:bg-transparent hover:text-pink-500 hover:border-pink-500 border border-transparent transition-all duration-300 ease-in-out"
        >
          <i class="fab fa-google-play mr-2"></i>
          Download
        </a>
      </div>
    </div>

    <div class="image-container lg:pt-32">
      <img src="../assets/images/smartphone.png" alt="Smartphone Image" />
    </div>
  </div>
  <div class="pt-4 pb-14 text-center mt-4">
    <div class="px-4 sm:px-8 xl:px-4">
      <p class="mb-4 text-gray-800 text-3xl leading-10 lg:max-w-5xl lg:mx-auto">
        Team management mobile apps don’t get better than Pavo. It’s probably
        the best app in the world for this purpose. Don’t hesitate to give it a
        try today and you will fall in love with it
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.backgroundColor {
  height: 170vh;
  background: linear-gradient(rgba(197, 234, 249, 1), rgba(255, 255, 255, 1));
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  gap: 24px;
}

.content-container {
  flex: 1;
  max-width: 500px;
  text-align: left;
  /* padding: 20px; */
}

.image-container {
  flex: 1;
  max-width: 500px;
  display: flex;
  justify-content: center;
}

img {
  max-width: 100%;
  height: auto;
}

.social-icons {
  display: flex;
  justify-content: left; /* Centers items horizontally */
  gap: 16px; /* Space between buttons */
}

/* Media query for mobile responsiveness */
@media (max-width: 768px) {
  .backgroundColor {
    flex-direction: column;
    height: auto;
  }

  .content-container {
    text-align: center;
    margin-bottom: 20px;
    margin-top: 5rem;
  }

  .image-container {
    margin-top: 20px;
    padding: 0 16px;
  }

  /* Make social buttons equally spaced on mobile */
  .social-icons {
    margin-top: 30px;
    width: 100%; /* Takes full width */
    flex-direction: column; /* Display buttons vertically */
    gap: 10px;
    justify-content: center;
    align-items: center;
  }

  .social-icons a {
    margin-left: 0 !important;
    margin-right: 0;
    width: 100%; /* Full width on mobile */
    max-width: 250px; /* Optional: Max width to make them not too wide */
    margin: 0; /* Remove any extra margin */
    text-align: center; /* Center the text inside each button */
  }
}

/* Tablet responsiveness */
@media (min-width: 769px) and (max-width: 1024px) {
  .backgroundColor {
    flex-direction: row; /* Keeps it side-by-side, like desktop */
    height: auto;
  }

  .content-container {
    text-align: left;
    margin-bottom: 20px;
  }

  .image-container {
    margin-top: 20px;
    margin-left: 20px;
  }

  /* Make social buttons equally spaced on tablets */
  .social-icons {
    width: 100%; /* Takes full width */
    flex-direction: row; /* Display buttons horizontally */
    gap: 15px;
    justify-content: center;
    align-items: center;
  }

  .social-icons a {
    width: auto; /* Buttons will auto adjust */
    max-width: 200px; /* Optional: Max width to avoid them becoming too large */
  }
}

/* Larger Tablets and Small Desktops */
@media (min-width: 1025px) and (max-width: 1280px) {
  .backgroundColor {
    flex-direction: row;
    height: auto;
  }

  .content-container {
    text-align: left;
    margin-bottom: 20px;
  }

  .image-container {
    margin-top: 20px;
    margin-left: 20px;
  }

  /* Keep buttons side by side, but with some space in between */
  .social-icons {
    width: 100%;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
  }

  .social-icons a {
    width: auto;
    max-width: 220px; /* Optional: Max width for consistency */
  }
}
</style>
