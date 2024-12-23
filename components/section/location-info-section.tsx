import { MapPin, PhoneIcon, TentIcon } from "lucide-react";
import Image from "next/image";

// TODO: DB 연결하면 쓰기
// interface Props {
//   imgUrl: string;
//   contact: string;
// }

export const LocationInfoSection = () => {
  return (
    <section className="px-0 md:px-5 md:py-10 w-full max-w-[1200px] flex flex-col md:flex-row border-b">
      <Image
        src={"/images/location/yeonam5701.jpg"}
        alt="allThatjazz"
        width={512}
        height={512}
        className="w-full md:w-96 lg:w-auto md:h-auto object-cover"
      />
      <hgroup className="md:ml-5 w-full font-medium">
        <div className="hidden md:block py-2 px-4 w-full bg-custom-2 text-background text-lg">
          기본정보
        </div>
        {/* PC Only */}
        <div className="p-5 md:py-0 md:px-0">
          <p className="md:mt-2 text-xl md:text-2xl font-bold opacity-80 tracking-wider">
            부기우기
          </p>
          <p className="text-sm md:text-base opacity-70 font-semibold">
            연남동 지하에 위치한 재즈바
          </p>

          <ul className="mt-5 text-sm md:text-base opacity-80 space-y-2">
            <li>
              <MapPin className="inline mr-2 text-custom-2" size={18} />
              서울 마포구 동교로23길 64 지하
            </li>

            <li>
              <PhoneIcon className="inline mr-2 text-custom-2" size={18} />
              0507-1344-8161
            </li>

            <li>
              <TentIcon className="inline mr-2 text-custom-2" size={18} />
              www.naver.com
            </li>
          </ul>
          <ul className="mt-5 text-sm">
            <li>월: 10:30 ~ 22:30</li>
          </ul>
        </div>
      </hgroup>
    </section>
  );
};
