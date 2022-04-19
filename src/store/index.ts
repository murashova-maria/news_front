import { createGlobalState } from "react-hooks-global-state";
import { IGlobalState } from "../types/IGlobalState";
const initialState: IGlobalState = {
  isAdmin: false,
  isLoggedIn: false,
  news: [],
  tabs: [],
  adminEditNews: null,
};

export const { useGlobalState } = createGlobalState(initialState);
