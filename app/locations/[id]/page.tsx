import { getLocationDetail } from "@/actions/location";
import { LocationInfoSection } from "@/components/section/location-info-section";
import { LocationLiveSection } from "@/components/section/location-live-section";
import { LocationMapSection } from "@/components/section/location-map-section";
import { LocationScheduleSection } from "@/components/section/location-schedule-section";
import { LocationTitleSection } from "@/components/section/location-title-section";
import { LocationType } from "@/type";
import { Metadata } from "next";

interface Props {
  params: {
    id: number;
  };
}

export const generateMetadata = async ({
  params,
}: Props): // TODO: 메타데이터 설정하기 parent: ResolvingMetadata
Promise<Metadata> => {
  const result: LocationType = await getLocationDetail(params.id);

  return {
    title: `${result.name} - 재즈수프`,
  };
};

// TODO: DB에서 받아오기 const LocationDetailPage = ({ params }: Props) => {
const LocationDetailPage = async ({ params }: Props) => {
  const result: LocationType = await getLocationDetail(params.id);

  return (
    <main className="py-20 md:py-40">
      <LocationTitleSection title={result.name} address={result.address} />
      <div className="px-5 mx-auto w-full max-w-[1280px]">
        <LocationInfoSection
          name={result.name}
          zipcode={result.zipcode}
          address={result.address}
          caption={result.caption}
          direction={result.direction}
          catch_table={result.catch_table}
          city={result.city}
          website={result.website}
          image_url={result.image_url}
          instagram={result.instagram}
          naver_url={result.naver_url}
          phone_number={result.phone_number}
          opening_hour0={result.opening_hour0}
          opening_hour1={result.opening_hour1}
          opening_hour2={result.opening_hour2}
          opening_hour3={result.opening_hour3}
          opening_hour4={result.opening_hour4}
          opening_hour5={result.opening_hour5}
          opening_hour6={result.opening_hour6}
        />
        <LocationMapSection />
        <LocationLiveSection />
        <LocationScheduleSection />
      </div>
    </main>
  );

  return (
    <main className="py-14 md:py-40 flex justify-center">
      <div className="w-full max-w-[1500px] flex flex-col items-center">
        {/* <LocationTitleSection title={result.name} address={result.address} /> */}
        <LocationInfoSection
          name={result.name}
          zipcode={result.zipcode}
          address={result.address}
          caption={result.caption}
          direction={result.direction}
          catch_table={result.catch_table}
          city={result.city}
          website={result.website}
          image_url={result.image_url}
          instagram={result.instagram}
          naver_url={result.naver_url}
          phone_number={result.phone_number}
          opening_hour0={result.opening_hour0}
          opening_hour1={result.opening_hour1}
          opening_hour2={result.opening_hour2}
          opening_hour3={result.opening_hour3}
          opening_hour4={result.opening_hour4}
          opening_hour5={result.opening_hour5}
          opening_hour6={result.opening_hour6}
        />
        <LocationMapSection />
        <LocationLiveSection />
        <LocationScheduleSection />
      </div>
    </main>
  );
};

export default LocationDetailPage;
