import { TopnavLocation } from "@/components/nav/top-nav-2";
import { TopnavLocationSmall } from "@/components/nav/top-nav-3";
import { MapPin } from "lucide-react";
import { LocationType } from "@/type";
import { getLocations } from "@/actions/location";
import { JazzbarCard } from "@/components/card/jazz-bar-card";

interface Props {
  searchParams: { gu: string | undefined };
}

// 동적 메타데이터
export const generateMetadata = async ({ searchParams }: Props) => {
  const location = searchParams.gu ? searchParams.gu : "전체";
  return {
    title: `${location} - 재즈수프`,
    description: `지역별 재즈바 목록: ${location}`,
  };
};

// 페이지 정보
const LocationPage = async ({ searchParams }: Props) => {
  const location = searchParams.gu ? searchParams.gu : "전체";
  const LOCATION_LIST: LocationType[] = await getLocations(searchParams.gu);

  return (
    <>
      <main className="py-28 md:py-60 p-5 flex flex-col items-center">
        <TopnavLocation selectedLocation={searchParams.gu} />
        <TopnavLocationSmall selectedLocation={searchParams.gu} />
        <div className="w-full max-w-[1500px]">
          <section className="pr-5 text-right">
            <MapPin
              className="inline mb-0.5 mr-1 text-rose-400"
              size={16}
              strokeWidth={2.5}
            />
            <span className="font-medium opacity-80">{location}</span>
          </section>
          <ul className="mt-5 grid grid-cols-3 gap-10">
            {LOCATION_LIST.map((item) => (
              <JazzbarCard
                key={item.location_id}
                id={item.location_id}
                title={item.name}
                caption={item.caption}
                address={item.address}
                opening_hour={item.opening_hour}
                imgUrl={item.image_url}
                phone_number={item.phone_number}
              />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default LocationPage;
