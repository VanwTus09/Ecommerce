import React from "react";
import { SWRConfig } from "swr";
import { AxiosInstance } from "@/api/axiosInstance";

const fetcher = async (url: string) => {
  const token = localStorage.getItem("token");
  const res = await AxiosInstance.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export function SWRProvider({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        shouldRetryOnError: false,
        fetcher,
      }}
    >
      {children}
    </SWRConfig>
  );
}