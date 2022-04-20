import { createContext } from "react";
import { makeObservable, observable } from "mobx";
import { getAllCommunity } from "apis/communityApi";
import { communityListType } from "types/type";

class CommunityStore {
  @observable allCommunity: communityListType[] | null = null;

  constructor() {
    makeObservable(this);
  }

  fetchCommunity = async () => {
    const data = await getAllCommunity();
    this.allCommunity = data;
  };
}

export default createContext(new CommunityStore());
