import { MapPin, PhoneIcon, TentIcon } from "lucide-react";
import Image from "next/image";

// TODO: DB 연결하면 쓰기
interface Props {
  name: string;
  image_url: string;
  caption: string;
  address: string;
  direction: string;
  city: string;
  zipcode: string;
  phone_number: string;
  website: string;
  instagram: string;
  catch_table: string;
  naver_url: string;
}

export const LocationInfoSection = ({
  name,
  image_url,
  caption,
  address,
  // direction,
  // city,
  // zipcode,
  phone_number,
  website,
}: // instagram,
// catch_table,
// naver_url,
Props) => {
  return (
    <section className="px-0 md:px-5 md:py-10 w-full max-w-[1200px] flex flex-col md:flex-row border-b">
      <Image
        src={image_url}
        alt={name}
        width={512}
        height={512}
        className="w-full md:w-96 lg:w-auto md:h-[450px] object-cover"
      />
      <hgroup className="md:ml-5 w-full font-medium">
        <div className="hidden md:block py-2 px-4 w-full bg-custom-2 text-background text-lg">
          기본정보
        </div>
        {/* PC Only */}
        <div className="p-5 md:py-0 md:px-0">
          <p className="md:mt-2 text-xl md:text-2xl font-bold opacity-80 tracking-wider">
            {name}
          </p>
          <p className="text-sm md:text-base opacity-70 font-semibold">
            {caption}
          </p>

          <ul className="mt-5 text-sm md:text-base opacity-80 space-y-2">
            <li>
              <MapPin className="inline mr-2 text-custom-2" size={18} />
              {address}
            </li>

            <li>
              <PhoneIcon className="inline mr-2 text-custom-2" size={18} />
              {phone_number}
            </li>

            <li>
              <TentIcon className="inline mr-2 text-custom-2" size={18} />
              {website}
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
