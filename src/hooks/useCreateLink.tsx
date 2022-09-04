import { useMutation } from "@tanstack/react-query";
import fetchLink from "../api/fetchLink";
import { queryClient } from "../App";
import { LINKS } from "../constants";
import { Result } from "../types/Link";

export default function useCreateLink() {
  return useMutation(fetchLink, {
    onSuccess: async (res) => {
      const data = await res.result;

      // get previous links
      const previous = queryClient.getQueryData<Result[]>([LINKS]);

      // update local storage
      window.localStorage.setItem(
        LINKS,
        JSON.stringify(previous?.concat(data) ?? [data])
      );

      // invalidate query cache
      return queryClient.invalidateQueries([LINKS]);
    },
    onError: (err) => err,
  });
}
