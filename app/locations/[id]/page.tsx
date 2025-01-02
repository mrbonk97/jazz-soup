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
    <main className="pt-14 md:pt-40 flex flex-col items-center">
      <LocationTitleSection title={result.name} address={result.address} />
      <LocationInfoSection
        name={result.name}
        zipcode={result.zipcode}
        address={result.address}
        caption={result.caption}
        catch_table={result.catch_table}
        city={result.city}
        direction={result.direction}
        image_url={result.image_url}
        instagram={result.instagram}
        naver_url={result.naver_url}
        phone_number={result.phone_number}
        website={result.website}
      />
      <LocationMapSection />
      <LocationLiveSection />
      <LocationScheduleSection />
    </main>
  );
};

export default LocationDetailPage;
