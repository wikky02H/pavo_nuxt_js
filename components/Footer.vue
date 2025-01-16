<template>
  <div class="footer w-full">
    <div class="container px-4 sm:px-8 pt-[94px] pb-[1.9rem] lg:mb-0">
      <h4 class="mb-8 lg:max-w-3xl lg:mx-auto lg:mt-0.5">
        {{ getDetailContent(9, 'footer').value.contentTitle }}
        <a
          href="mailto:email@domain.com"
          class="text-indigo-600 hover:text-gray-500"
        >
        {{ getDetailContent(9, 'footer').value.contentDescription }}
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
    </div>
    <FooterBar />
  </div>
</template>

<script setup lang="ts">
import { GetIconsListApi } from '~/services/home'
import { ref, onMounted } from 'vue'
import { socialLinks as staticSocialLinks } from '~/constants/dataSets'
import { usePageContent } from '~/composables/usePageContent'

const { getDetailContent } = usePageContent()
const socialLinks = ref<{ link: string; icon: string }[]>([])

onMounted(() => {
  GetIconData()
})

async function GetIconData() {
  try {
    const { data = null, status = 500 } = await GetIconsListApi()
    if (status === 200 && data) {
      socialLinks.value = data.footer.map((social: any) => ({
        link: `#${social.name}`,
        icon: social.icon,
      }))
    } else {
      socialLinks.value = staticSocialLinks
    }
  } catch (error) {
    console.error('Error fetching page content data:', error)
  }
}
</script>

<style scoped>
.footer {
  /* padding-top: 6rem;
  padding-bottom: 1.9rem; */
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
  font-weight: 700;
  font-family: 'Open Sans', sans-serif;
  margin: 0 auto;
  /* padding: 32px; */
  line-height: 1.3;
  margin-left: auto;
  margin-right: auto;
  /* padding: 0 32px 32px 32p; */
}

a {
  text-decoration: none;
}

.social-container {
  /* display: flex; */
  justify-content: center;
  gap: none;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.social-container .social-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 47px;
  background-color: white;
  border-radius: 50%;
  transition: all 0.3s ease;
  color: #252c38;
  font-size: 22px;
  text-align: center;
  margin-left: 7px;
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
    /* padding: 24px; */
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
    /* padding: 16px; */
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
