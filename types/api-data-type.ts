export type TMenuItem = {
    id: number;
    name: string;
    type: string;
    parentId?: number;
    orderNo: number;
  };
export type TMenus = TMenuItem & {
    subMenus: TMenuItem[];
  };

  export type TContentDetail = {
    contentDetailId: number;
    contentDetailOrderNo: number;
    contentPage: string;
    contentDetailName: string;
};

export type TContentItem = {
    contentId: number;
    contentPage: string;
    contentTitle: string | null;
    contentDescription: string | null;
    contentImagePath: string | null;
    contentFeedback: any;
    contentFeedbackUserId: any;
    contentOrderNo: number;
    feedback: any;
    orderNo: any;
    userId: any;
    userName: any;
    contentDetailsList: TContentDetail[];
};

export type TContent = {
    home: TContentItem[];
    details: TContentItem[];
    subscription: TContentItem[];
    features: Array<any>;
    footer: Array<any>;
};

export type TStatistics = {
  title: string;
  start: number;
  end: number;
  current?: number;
}

export type TPricingPlan = {
  id: number;
  planName: string;
  description: string;
  price: number;
  priceUnit: string;
  billingCycle: string;
  features: string[];
}

export type TSlider = {
  feedback: string | any;
  orderNo?: number;
  userName?: string;
  contentImagePath?: string;
};

export type TFeature = {
  title: string;
  description: string;
  imgPath: string;
};