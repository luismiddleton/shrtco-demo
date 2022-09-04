import { useQuery } from "@tanstack/react-query";
import { LINKS } from "../constants";
import { Result } from "../types/Link";

// Default state
const fetchStore = async () => {
  const store = window.localStorage.getItem(LINKS);
  return Promise.resolve(store ? JSON.parse(store) : []);
};

export default function useLinks() {
  return useQuery<Result[]>([LINKS], fetchStore);
}
