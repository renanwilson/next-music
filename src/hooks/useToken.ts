export const setToken = (token: string | null | undefined) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("token", token as string);
  }
};
export const getToken = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    return { token };
  }
};
