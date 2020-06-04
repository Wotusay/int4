import { createContext } from "react";
import Store from "../stores/store";

const store = new Store();
export const storeContext = createContext(store);