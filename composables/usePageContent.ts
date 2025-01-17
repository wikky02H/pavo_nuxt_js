import { ref, onMounted, computed } from 'vue';
import { GetPageContentApi } from '~/services/home';
import { useDetailContent } from '~/utils/common';
import type { TContent, TFeature } from '~/types/api-data-type';

export function usePageContent() {
  const HomeContent = ref<TContent | null>(null);
  const formattedFeatures = ref<TFeature[]>([]);
  function formatFeatures(featuresData: any) {
    formattedFeatures.value = featuresData.map((feature: any) => ({
      title: feature.contentTitle,
      description: feature.contentDescription,
      imgPath: feature.contentImagePath,
    }));
  }
  const GetPageContentData = async () => {
    try {
      const { data = null, status = 500 } = await GetPageContentApi();
      if (status === 200 && data) {
        HomeContent.value = data;
        const featuresData = data.filter((item: any) => item.contentPage === 'features');
        formatFeatures(featuresData);
      } else {
        HomeContent.value = null;
        console.error('Failed to fetch page content data');
      }
    } catch (error) {
      console.error('Error fetching page content data:', error);
      HomeContent.value = null;
    }
  };

  onMounted(() => {
    GetPageContentData();
  });

  const getDetailContent = (contentId: number, contentPage: string, type: 'features' | null = null) => {
    if (type === 'features') {
        return computed(() => formattedFeatures.value);
      }
    return useDetailContent(HomeContent, contentId, contentPage);
  };

  return { getDetailContent };
}
