import { TopnavLocation } from "@/components/nav/top-nav-2";
import { TopnavLocationSmall } from "@/components/nav/top-nav-3";
import { JAZZ_BAR } from "@/constants";
import { HeartIcon, MapPin } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

interface Props {
  searchParams: { q: string | undefined };
}

export const generateMetadata = async ({
  searchParams,
}: Props): Promise<Metadata> => {
  return {
    title: `재즈수프: ${searchParams.q ? searchParams.q : "전체"}`,
  };
};

const LocationPage = ({ searchParams }: Props) => {
  return (
    <main className="pt-36 md:pt-60 flex flex-col items-center">
      <TopnavLocation selectedLocation={searchParams.q} />
      <TopnavLocationSmall selectedLocation={searchParams.q} />
      <section className="p-5 pb-2 text-right w-full lg:max-w-[1200px]">
        <h1 className="font-medium opacity-80">
          <MapPin
            className="inline pb-[3px] pr-1 text-rose-400"
            strokeWidth={3}
            size={18}
          />
          지역: {searchParams.q ? searchParams.q : "전체"}
        </h1>
      </section>
      <section className="pt-0 p-5 w-full lg:max-w-[1200px]">
        <ul className="grid border-b grid-cols-1 lg:grid-cols-2 gap-5">
          {JAZZ_BAR.map((item) => (
            <JazzbarCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              address1={item.address1}
              imgUrl={item.img_url}
              contact={item.contact_number}
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
  description: string;
  address1: string;
  contact?: string;
  imgUrl: string;
}

const JazzbarCard = ({
  id,
  title,
  description,
  address1,
  contact,
  imgUrl,
}: JazzbarCardProps) => {
  return (
    <li>
      <Link
        className="relative p-3 md:p-5 border-t md:border rounded-none flex flex-col-reverse md:flex-row justify-between gap-0 md:gap-5 hover:bg-custom-1 md:hover:rounded-lg duration-300"
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
          <ul className="flex flex-col gap-2 text-xs font-bold opacity-70">
            <li className="md:hidden">{address1}</li>
            <li className="md:hidden">{contact}</li>
            <li className="md:hidden">10:30 ~ 22:30</li>
            <li className="mt-4 md:hidden text-sm">
              오늘 공연: 링티 레몬 퀸텟
            </li>
          </ul>
        </div>

        <div>
          <hgroup>
            <div className="">
              <h2 className="inline text-lg md:text-3xl font-bold md:font-medium opacity-80">
                {title}
              </h2>
              <MapPin
                className="ml-2 text-custom-2 text-xs inline"
                size={12}
                strokeWidth={3}
              />
              <span className="ml-0.5 font-medium text-sm opacity-70">
                마곡
              </span>
            </div>
            <p className="md:mt-1 text-sm font-medium opacity-70">
              {description}
            </p>
            <ul className="mt-4 grid grid-cols-5 gap-x-2 text-sm opacity-80">
              <li className="hidden md:block col-span-1">주소: </li>
              <li className="hidden md:block col-span-4">{address1}</li>
              <li className="hidden md:block col-span-1">연락처: </li>
              <li className="hidden md:block col-span-4">{contact}</li>
              <li className="hidden md:block col-span-1">영업시간: </li>
              <li className="hidden md:block col-span-4">10:30 ~ 22:30</li>
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
