"use client";
import {
  CheckIcon,
  ChevronDown,
  ClockIcon,
  CopyIcon,
  DotIcon,
  MapIcon,
  MapPin,
  MilestoneIcon,
  PhoneIcon,
  TentIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { useState } from "react";

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
  opening_hour0: string;
  opening_hour1: string;
  opening_hour2: string;
  opening_hour3: string;
  opening_hour4: string;
  opening_hour5: string;
  opening_hour6: string;
}

export const LocationInfoSection = ({
  name,
  image_url,
  caption,
  address,
  direction,
  // city,
  // zipcode,
  phone_number,
  website,
  instagram,
  catch_table,
  naver_url,
  opening_hour0,
  opening_hour1,
  opening_hour2,
  opening_hour3,
  opening_hour4,
  opening_hour5,
  opening_hour6,
}: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
  };

  return (
    <section className="mt-5 flex flex-col lg:flex-row gap-5">
      <Image
        src={image_url}
        alt={name}
        width={512}
        height={512}
        className="w-full h-96 lg:h-[450px] object-cover"
      />
      <hgroup className="w-full font-medium">
        <div className="hidden lg:block py-2 px-4 w-full bg-custom-2 text-background text-lg">
          기본정보
        </div>
        <ul className="mt-5 space-y-1">
          <li className="flex gap-2">
            <ClockIcon
              size={16}
              strokeWidth={3}
              className="mt-[7px] flex-shrink-0 text-custom-2"
            />
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <span
                  role="button"
                  className="p-1 rounded-lg hover:bg-secondary duration-150"
                >
                  {opening_hour1}
                  <ChevronDown size={18} className="ml-1 mb-0.5 inline" />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="font-medium">
                <DropdownMenuItem>월: {opening_hour1}</DropdownMenuItem>
                <DropdownMenuItem>화: {opening_hour2}</DropdownMenuItem>
                <DropdownMenuItem>수: {opening_hour3}</DropdownMenuItem>
                <DropdownMenuItem>목: {opening_hour4}</DropdownMenuItem>
                <DropdownMenuItem>금: {opening_hour5}</DropdownMenuItem>
                <DropdownMenuItem>토: {opening_hour6}</DropdownMenuItem>
                <DropdownMenuItem>일: {opening_hour0}</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li className="flex gap-2">
            <MapIcon
              size={16}
              strokeWidth={3}
              className="mt-[7px] flex-shrink-0 text-custom-2"
            />
            <div className="flex items-center gap-2">
              <span>{address}</span>
              {isCopied ? (
                <CheckIcon
                  size={32}
                  role="button"
                  onClick={() => handleCopy(address)}
                  className="p-2 rounded-lg hover:bg-secondary duration-150"
                />
              ) : (
                <CopyIcon
                  size={32}
                  role="button"
                  onClick={() => handleCopy(address)}
                  className="p-2 rounded-lg hover:bg-secondary duration-150"
                />
              )}
            </div>
          </li>
          <li className="flex gap-2">
            <MilestoneIcon
              size={16}
              strokeWidth={3}
              className="mt-1 flex-shrink-0 text-custom-2"
            />
            <span>{direction}</span>
          </li>
          <li className="flex gap-2">
            <PhoneIcon
              size={16}
              strokeWidth={3}
              className="mt-1 flex-shrink-0 text-custom-2"
            />
            <span>{phone_number}</span>
          </li>
          <li className="mt-1 flex gap-1">
            {naver_url && (
              <div>
                <DotIcon className="inline mb-1 text-custom-2" />
                <a
                  href={naver_url}
                  target="webapp-tab"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-2"
                >
                  네이버 지도
                </a>
              </div>
            )}
            {instagram && (
              <div>
                <DotIcon className="inline mb-1 text-custom-2" />
                <a
                  href={instagram}
                  target="webapp-tab"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-2"
                >
                  인스타그램
                </a>
              </div>
            )}
            {catch_table && (
              <div>
                <DotIcon className="inline mb-1 text-custom-2" />
                <a
                  href={catch_table}
                  target="webapp-tab"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-2"
                >
                  캐치테이블
                </a>
              </div>
            )}
            {website && (
              <div>
                <DotIcon className="inline mb-1 text-custom-2" />
                <a
                  href={website}
                  target="webapp-tab"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-2"
                >
                  홈페이지
                </a>
              </div>
            )}
          </li>
        </ul>

        {/* PC Only */}
      </hgroup>
    </section>
  );
};
