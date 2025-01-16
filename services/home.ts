import ServiceCall from "./service-call";
import { home } from "./service-routes.json";

export async function GetMenuListApi() {
  const response = await ServiceCall({
    ...home.menuList
  });

  return response;
}
export async function GetIconsListApi() {
  const response = await ServiceCall({
    ...home.icons
  });

  return response;
}

export async function GetPageContentApi() {
  const response = await ServiceCall({
    ...home.contents,
  });
  return response;
}
export async function GetStatisticsApi() {
  const response = await ServiceCall({
    ...home.statistics,
  });

  return response;
}
export async function GetSubscriptionApi() {
  const response = await ServiceCall({
    ...home.subscription,
  });

  return response;
}
export async function GetFeedbackContentApi() {
  const response = await ServiceCall({
    ...home.feedbackContent,
  });

  return response;
}
