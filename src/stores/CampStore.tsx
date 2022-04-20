import { createContext } from "react";
import { makeObservable, observable } from "mobx";

import { getCampsById, getCampsByType } from "apis/campApi";
import { campListType, campDetailType } from "types/type";

class CampsStore {
  @observable campPopular: campListType[] | null = null;
  @observable campSales: campListType[] | null = null;
  @observable targetCamp: campDetailType | null = null;

  constructor() {
    makeObservable(this);
  }

  fetchCampsPopular = async () => {
    const data = await getCampsByType("popular");
    this.campPopular = data;
  };

  fetchCampsSale = async () => {
    const data = await getCampsByType("sale");
    this.campSales = data;
  };

  fetchCampsById = async (campId: string | undefined) => {
    const data = await getCampsById(campId);
    this.targetCamp = data;
  };
}

export default createContext(new CampsStore());
