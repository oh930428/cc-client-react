export interface campType {
  id: string;
  campName: string;
  field: string;
  skill: string;
  startDate: string;
  status: string;
  thumbnail: string;
  type: string;
}

export interface campListType {
  id: string;
  data: campType;
}

export interface campDetailType {
  id: string;
  name: string;
  tags: string[];
  desc: string;
  seat: string;
  reviewMaterial: string[];
  headerImage: string;
  images: string[];
  process: string;
  type: string;
  startDate: string;
  reviews: { content: string; reviewer: string }[];
  faqs: { id: number; question: string; answer: string }[];
}

export interface communityListType {
  id: string;
  data: communityAllType;
}
export interface communityAllType {
  id: number;
  tags: string[];
  communityTitle: string;
  subTitle: string;
  comments: commentType[];
}

export interface commentType {
  profile: string;
  nickName: string;
  content: string;
}
