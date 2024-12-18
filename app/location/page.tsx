import { TopnavLocation } from "@/components/nav/top-nav-2";
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
    <main className="pt-52 flex flex-col items-center">
      <TopnavLocation selectedLocation={searchParams.q} />
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
        <ul className="grid grid-cols-2 gap-5">
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
        className="relative p-5 border rounded-none flex gap-5 hover:bg-custom-1 hover:rounded-lg duration-300"
        href={`/location/${id}`}
      >
        <HeartIcon
          role="button"
          size={16}
          strokeWidth={2}
          className="absolute right-5 top-5"
        />
        <Image
          src={imgUrl}
          alt="img"
          height={256}
          width={256}
          className="h-52 w-52 rounded-lg"
        />
        <div>
          <hgroup>
            <h2 className="text-3xl font-medium opacity-80">{title}</h2>
            <p className="mt-1 text-sm font-medium opacity-70">{description}</p>
            <ul className="mt-4 grid grid-cols-5 gap-x-2 text-sm opacity-80">
              <li className="col-span-1">주소: </li>
              <li className="col-span-4">{address1}</li>
              <li className="col-span-1">연락처: </li>
              <li className="col-span-4">{contact}</li>
              <li className="col-span-1">영업시간: </li>
              <li className="col-span-4">10:30 ~ 22:30</li>
            </ul>
          </hgroup>
          <h4 className="mt-6 text-lg font-medium text-center">
            오늘공연: 페퍼민트 트리오
          </h4>
        </div>
      </Link>
    </li>
  );
};
