import { createContext } from "react";
import Store from "../stores/index";

const store = new Store();
store.loadAllData();
export const storeContext = createContext(store);