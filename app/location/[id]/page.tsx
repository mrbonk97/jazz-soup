import { ConcertCalendar } from "@/components/concert/concert-calendar";
import { JAZZ_BAR } from "@/constants";
import { ClubIcon, LampIcon, MapPin } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

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
  const data = JAZZ_BAR[0];
  const today = new Date().getDay();

  return (
    <main className="pt-20 flex flex-col items-center">
      <section className="p-5 w-full flex2 bg-custom-1 border-b">
        <hgroup className="w-[1200px]">
          <h3 className="text-sm font-medium opacity-80">지역: 강서구</h3>
          <h1 className="text-3xl font-bold opacity-80">
            <ClubIcon
              className="inline mb-1.5 mr-2 text-custom-2"
              strokeWidth={3}
              size={18}
            />
            {data.title}
          </h1>
          <h2 className="font-medium opacity-80">{data.description}</h2>
        </hgroup>
      </section>
      <section className="p-5 px-0 flex gap-2 w-[1200px]">
        <Image
          src={
            "/images/carousel/main-carousel/beautiful-mountain-landscape.jpg"
          }
          alt="allThatjazz"
          width={512}
          height={512}
        />
        <div className="ml-5 space-y-2 tracking-wider font-medium w-full">
          <div className="p-2 w-full bg-custom-1">
            <span className="opacity-80 font-bold">기본정보</span>
          </div>
          <div>
            <p className="text-xl font-bold text-custom-2">영업시간</p>
            <ul className="mt-1 ml-2">
              <li className={`${today == 1 && "text-custom-2"}`}>
                월: 10:30 ~ 22:30
              </li>
              <li className={`${today == 2 && "text-custom-2"}`}>
                화: 10:30 ~ 22:30
              </li>
              <li className={`${today == 3 && "text-custom-2"}`}>
                수: 10:30 ~ 22:30
              </li>
              <li className={`${today == 4 && "text-custom-2"}`}>
                목: 10:30 ~ 22:30
              </li>
              <li className={`${today == 5 && "text-custom-2"}`}>
                금: 10:30 ~ 22:30
              </li>
              <li className={`${today == 6 && "text-custom-2"}`}>
                토: 10:30 ~ 22:30
              </li>
              <li className={`${today == 7 && "text-custom-2"}`}>
                일: 10:30 ~ 22:30
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-bold text-custom-2">연락처</p>
            <ul className="mt-1 ml-2">
              <li>010-1234-1234</li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-bold text-custom-2">연락처</p>
            <ul className="mt-1 ml-2">
              <li>010-1234-1234</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="pt-0 p-5 px-0 w-[1200px]">
        <div className="p-2 w-full bg-custom-1">
          <span className="opacity-80 font-bold">위치</span>
        </div>
        <Image
          className="mt-5"
          src={"/images/mapp.png"}
          alt="map"
          width={1200}
          height={800}
        />
        <p className="mt-2 font-medium text-center">
          <MapPin
            className="inline pb-0.5 text-custom-2"
            strokeWidth={2}
            size={16}
          />
          {data.address1}
        </p>
      </section>
      <section className="pt-0 p-5 px-0 w-[1200px]">
        <div className="p-2 w-full bg-custom-1">
          <span className="opacity-80 font-bold">공연 일정</span>
        </div>
        <div className="mt-5 flex gap-10 justify-between">
          <div>
            <ConcertCalendar />
            <ul className="mt-5 font-medium text-lg space-y-5">
              <li
                role="button"
                className="p-5 bg-custom-2 text-custom-1 text-right border"
              >
                <LampIcon className="inline mb-0.5 mr-2" />
                1부 공연
              </li>
              <li
                role="button"
                className="p-5 bg-custom-2 text-custom-1 text-right border"
              >
                <LampIcon className="inline mb-0.5 mr-2" />
                2부 공연
              </li>
            </ul>
          </div>
          <Image
            src={"/images/jazz-trio.jpg"}
            alt="jazz trio"
            width={1028}
            height={1028}
            className="w-full object-cover border"
          />
        </div>
      </section>
    </main>
  );
};

export default LocationDetailPage;

{
  /* <p className="mt-1 font-medium text-sm">
<MapPin
  className="inline pb-0.5 text-custom-2"
  strokeWidth={2}
  size={16}
/>
{data.address1}
</p> */
}
