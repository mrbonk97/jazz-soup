import { LocationInfoSection } from "@/components/section/location-info-section";
import { LocationLiveSection } from "@/components/section/location-live-section";
import { LocationMapSection } from "@/components/section/location-map-section";
import { LocationScheduleSection } from "@/components/section/location-schedule-section";
import { LocationTitleSection } from "@/components/section/location-title-section";
import { Metadata } from "next";

interface Props {
  params: {
    id: string;
  };
}

export const generateMetadata = async ({
  params,
}: Props): // TODO: 메타데이터 설정하기 parent: ResolvingMetadata
Promise<Metadata> => {
  return {
    title: `${params.id}`,
  };
};

// TODO: DB에서 받아오기 const LocationDetailPage = ({ params }: Props) => {
const LocationDetailPage = () => {
  return (
    <main className="pt-14 md:pt-40 flex flex-col items-center">
      <LocationTitleSection title={"glglgl"} />
      <LocationInfoSection />
      <LocationMapSection />
      <LocationLiveSection />
      <LocationScheduleSection />
    </main>
  );
};

export default LocationDetailPage;
