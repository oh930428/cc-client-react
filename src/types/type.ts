export interface ICamp {
  id: number;
  campName: string;
  type: string; // '인기 부트 캠프', '특가 할인 캠프'
  status: string; // '모집중, 모집완료, 등등'
  field: string;
  skill: string;
  startDate: string;
  thumbnail: string;
}

export interface ICommunity {
  id: number;
  tags: string[];
  communityTitle: string;
  subTitle: string;
  comments: IComment[];
}

export interface IComment {
  profile: string;
  nickName: string;
  content: string;
}
