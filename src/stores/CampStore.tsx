import { getCampsByType } from "apis/campApi";
import { makeObservable, observable } from "mobx";
import { createContext } from "react";
import { ICamp } from "types/type";

class CampsStore {
  @observable campPopular: ICamp[] | null = null;
  @observable campSales: ICamp[] | null = null;

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
}

export default createContext(new CampsStore());
