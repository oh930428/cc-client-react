import { firestore } from "constants/firebase";
import { communityListType } from "./../types/type";

export const getAllCommunity = async () => {
  let communityList: communityListType[] = [];
  return await firestore
    .collection("communities")
    .get()
    .then((docs) => {
      docs.forEach((doc) => {
        communityList.push({
          id: doc.id,
          data: {
            id: doc.data().id,
            tags: doc.data().tags,
            communityTitle: doc.data().communityTitle,
            subTitle: doc.data().subTitle,
            comments: doc.data().comments,
          },
        });
      });
      return communityList;
    });
};
