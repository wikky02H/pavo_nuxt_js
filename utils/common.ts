import type { TContent, TMenuItem, TMenus } from "~/types/api-data-type";

export function getLength(data: any[]) {
  return data && data.length > 0 ? data.length : 0;
}

export function getMenuItem(row: TMenuItem) {
  return {
    id: row?.id,
    name: row?.name,
    type: row?.type,
    parentId: row?.parentId,
    orderNo: row?.orderNo,
  };
}
export function getMenusData(data: { header: TMenuItem[], footer: TMenuItem[] }) {
  const allMenus = [...data.header, ...data.footer];
  const menuMap: { [key: number]: TMenus } = {};
  allMenus.forEach((menu) => {
    const menuItem = getMenuItem(menu);
    if (menuItem.parentId === null || menuItem.parentId === undefined) {
      menuMap[menuItem.id] = {
        ...menuItem,
        subMenus: [],
      };
    }
  });
  allMenus.forEach((menu) => {
    const menuItem = getMenuItem(menu);
    if (menuItem.parentId !== null && menuItem.parentId !== undefined) {
      const parentMenu = menuMap[menuItem.parentId];
      if (parentMenu) {
        parentMenu.subMenus.push(menuItem);
      }
    }
  });
  return Object.values(menuMap);
}

export const useDetailContent = (contents: Ref<TContent | null>, contentId: number, contentPage: string) => {
  return computed(() => {
    if (contents.value && Array.isArray(contents.value)) {
      const content = contents.value.find(
        (item) => item.contentId === contentId && item.contentPage === contentPage
      );
      return content || {
        contentTitle: 'Loading content...',
        contentDescription: 'Please wait while we fetch the details.',
        contentImagePath: 'image not found',
        contentDetailsList: [],
      };
    }

    return {
      contentTitle: 'Loading content...',
      contentDescription: 'Please wait...',
      contentImagePath: 'Please wait...',
      contentDetailsList: [],
    };
  });
};
