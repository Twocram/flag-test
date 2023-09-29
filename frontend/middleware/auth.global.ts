export default defineNuxtRouteMiddleware((to, from) => {
  const { value: token } = useCookie("token");

  if (!token && to.path !== "/login") {
    return navigateTo("/login");
  } else if (token && to.path === "/login") {
    return navigateTo("/");
  }
});
