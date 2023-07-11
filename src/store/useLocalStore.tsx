import { create } from "zustand";

interface State {
  isRead: null | "yes" | "no";
  setReadFlag: (flag: boolean) => void;
}
const useLocalStore = create<State>((set) => ({
  isRead: null,
  setReadFlag: (flag: boolean) => {
    localStorage.setItem("isRead", flag ? "yes" : "no");
    return set(() => ({ isRead: flag ? "yes" : "no" }));
  },
}));
export { useLocalStore };
