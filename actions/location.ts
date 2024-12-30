import { LocationType } from "@/type";

const BASE_URL = process.env.BASE_URL;

export const getLocations = async (
  gu: string | undefined
): Promise<LocationType[]> => {
  const queryParams = new URLSearchParams();
  if (gu) queryParams.set("gu", gu);

  const result = await fetch(
    `${BASE_URL}/api/locations?${queryParams.toString()}`,
    {
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );

  console.log("재즈바 리스트 조회, 검색어: ", gu);
  return result.json();
};
