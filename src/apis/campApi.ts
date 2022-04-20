import { firestore } from "constants/firebase";
import { campListType, campDetailType } from "types/type";

export const getCampsByType = async (type: string) => {
  const campList: campListType[] = [];
  return await firestore
    .collection("camps")
    .where("type", "==", `${type}`)
    .get()
    .then((docs) => {
      docs.forEach((doc) => {
        campList.push({
          id: doc.id,
          data: {
            id: doc.data().id,
            startDate: doc.data().startDate,
            campName: doc.data().campName,
            field: doc.data().field,
            skill: doc.data().skill,
            status: doc.data().status,
            thumbnail: doc.data().thumbnail,
            type: doc.data().type,
          },
        });
      });
      return campList;
    });
};

export const getCampsById = async (campId: string | undefined) => {
  let camp: campDetailType = {
    id: "",
    name: "",
    tags: [],
    desc: "",
    seat: "",
    reviewMaterial: [],
    headerImage: "",
    images: [],
    process: "",
    type: "",
    startDate: "",
    reviews: [],
    faqs: [],
  };
  return await firestore
    .collection("campDetail")
    .where("id", "==", `${campId}`)
    .get()
    .then((docs) => {
      docs.forEach((doc) => {
        camp = {
          id: doc.id,
          name: doc.data().name,
          tags: doc.data().tags,
          desc: doc.data().desc,
          seat: doc.data().seat,
          reviewMaterial: doc.data().reviewMaterial,
          headerImage: doc.data().headerImage,
          images: doc.data().images,
          process: doc.data().process,
          type: doc.data().type,
          startDate: doc.data().startDate,
          reviews: doc.data().reviews,
          faqs: doc.data().faqs,
        };
      });
      return camp;
    });
};
