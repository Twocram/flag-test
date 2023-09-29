import { TAuthResponse } from "~/types";

export const auth = async (
  login: string,
  password: string,
): Promise<unknown> => {
  const config = useRuntimeConfig();

  try {
    const res: TAuthResponse | null = await $fetch("/login", {
      method: "POST",
      baseURL: config.public.apiBase as string,
      body: {
        login,
        password,
      },
    });

    const token: string | undefined = res?.token;

    const tokenCookie = useCookie("token", {
      maxAge: 60 * 60 * 24,
    });

    tokenCookie.value = token;

    return navigateTo("/");
  } catch (error: unknown) {
    console.error("Login error", error);
    alert("Check correct of your fields");
  }
};
