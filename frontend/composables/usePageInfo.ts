import { TPost } from "~/types";

export const usePageInfo = async (page: string): Promise<TPost | null> => {
  const { value: token } = useCookie("token");

  const config = useRuntimeConfig();

  try {
    const response: TPost | null = await $fetch(`pages/${page}`, {
      method: "GET",
      baseURL: config.public.apiBase as string,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response ? (response as TPost) : null;
  } catch (error: unknown) {
    console.error(error);
    return null;
  }
};
