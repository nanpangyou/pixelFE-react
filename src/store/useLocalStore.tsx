import { create } from "zustand";

interface State {
  isRead: boolean;
  setReadFlag: (flag: boolean) => void;
}
const init = localStorage.getItem("isRead") === "yes";
const useLocalStore = create<State>((set) => ({
  isRead: init,
  setReadFlag: (flag: boolean) => {
    localStorage.setItem("isRead", flag ? "yes" : "no");
    return set({ isRead: flag });
  },
}));
export { useLocalStore };
