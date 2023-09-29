export const logout = (): void => {
  const tokenCookie = useCookie("token");

  tokenCookie.value = null;
};
