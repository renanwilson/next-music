import { useEffect } from "react";

export const useGetParams = (value: string) => {
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.hash.replace("#", "?"));
    const urlValue = params.get(value);
    return { urlValue };
  }
};
