import { TopnavLocation } from "@/components/nav/top-nav-2";
import { TopnavLocationSmall } from "@/components/nav/top-nav-3";
import { HeartIcon, MapPin } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LocationType } from "@/type";
import { getLocations } from "@/actions/location";

interface Props {
  searchParams: { gu: string | undefined };
}

export const generateMetadata = async ({
  searchParams,
}: Props): Promise<Metadata> => {
  return {
    title: `재즈수프: ${searchParams.gu ? searchParams.gu : "전체"}`,
  };
};

const LocationPage = async ({ searchParams }: Props) => {
  const LOCATION_LIST: LocationType[] = await getLocations(searchParams.gu);

  return (
    <main className="pt-24 md:pt-60 flex flex-col items-center">
      <TopnavLocation selectedLocation={searchParams.gu} />
      <TopnavLocationSmall selectedLocation={searchParams.gu} />
      <section className="p-5 pb-2 text-right w-full lg:max-w-[1200px]">
        <h1 className="font-medium opacity-80">
          <MapPin
            className="inline pb-[3px] pr-1 text-rose-400"
            strokeWidth={3}
            size={18}
          />
          지역: {searchParams.gu ? searchParams.gu : "전체"}
        </h1>
      </section>
      <section className="pt-0 p-5 w-full lg:max-w-[1200px]">
        <ul className="grid border-b grid-cols-1 lg:grid-cols-2 md:gap-5">
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
      </section>
    </main>
  );
};

export default LocationPage;

interface JazzbarCardProps {
  id: string;
  title: string;
  caption: string | null;
  address: string;
  opening_hour: string;
  phone_number: string;
  imgUrl: string;
}

const JazzbarCard = ({
  id,
  title,
  caption,
  address,
  opening_hour,
  phone_number,
  imgUrl,
}: JazzbarCardProps) => {
  return (
    <li>
      <Link
        className="relative p-3 md:p-5 border-t md:border rounded-none flex flex-col-reverse md:flex-row justify-between md:justify-start gap-0 md:gap-5 hover:bg-[#DBE2EF] md:hover:rounded-lg duration-300"
        href={`/location/${id}`}
      >
        <HeartIcon
          role="button"
          size={16}
          strokeWidth={2}
          className="absolute right-5 top-5"
        />
        <div className="flex gap-3 md:block">
          <Image
            src={imgUrl}
            alt="img"
            height={256}
            width={256}
            className="h-32 w-32 md:h-52 md:w-52 rounded-lg"
          />
          <ul className="flex flex-col gap-0.5 text-xs font-bold opacity-70">
            <li className="md:hidden">{address}</li>
            <li className="md:hidden">{phone_number}</li>
            <li className="md:hidden">{opening_hour}</li>
            <li className="mt-4 md:hidden text-sm">
              오늘 공연: 링티 레몬 퀸텟
            </li>
          </ul>
        </div>

        <div>
          <hgroup>
            <div>
              <h2 className="inline text-lg md:text-3xl font-bold md:font-medium opacity-80">
                {title}
              </h2>
              <MapPin
                className="md:hidden ml-2 mb-1 text-custom-2 text-xs inline"
                size={12}
                strokeWidth={3}
              />
              <span className="md:hidden ml-0.5 font-medium text-sm opacity-70">
                마곡
              </span>
            </div>
            <p className="md:mt-1 text-sm font-medium opacity-70">{caption}</p>
            <ul className="mt-4 grid grid-cols-5 lg:gap-x-2 text-sm opacity-80">
              <li className="hidden md:block col-span-1">주소: </li>
              <li className="hidden md:block col-span-4 w-20 whitespace-nowrap">
                {address}
              </li>
              <li className="hidden md:block col-span-1">연락처: </li>
              <li className="hidden md:block col-span-4">{phone_number}</li>
              <li className="hidden md:block col-span-1 whitespace-nowrap">
                영업시간:
              </li>
              <li className="hidden md:block col-span-4">{opening_hour}</li>
            </ul>
          </hgroup>
          <h4 className="hidden md:block mt-6 text-lg font-medium text-center">
            오늘공연: 페퍼민트 트리오
          </h4>
        </div>
      </Link>
    </li>
  );
};
