import { HeartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface JazzbarCardProps {
  id: string;
  title: string;
  caption: string | null;
  address: string;
  opening_hour: string;
  phone_number: string;
  imgUrl: string;
}

export const JazzbarCard = ({
  id,
  title,
  address,
  opening_hour,
  imgUrl,
}: JazzbarCardProps) => {
  return (
    <li role="button" className="col-span-1">
      <Link
        href={`/locations/${id}`}
        className="relative block p-5 hover:bg-secondary duration-150 rounded-2xl"
      >
        <button className="absolute top-8 right-8 h-8 w-8 flex2 rounded-full bg-background hover:bg-rose-200 hover:text-white duration-150">
          <HeartIcon size={16} />
        </button>
        <Image
          src={imgUrl}
          alt={title}
          height={384}
          width={384}
          className="h-72 w-full rounded-2xl object-cover"
        />
        <hgroup className="mt-2">
          <div className="flex justify-between items-center gap-5">
            <h3 className="text-lg font-medium opacity-80">{title}</h3>
            <span className="text-sm font-medium opacity-80">
              {opening_hour}
            </span>
          </div>
          <p className="text-sm font-medium opacity-70">{address}</p>
          <p className="text-sm font-medium opacity-70">
            오늘 공연: 1부. 깔깔쟁이 2부. 히히호히
          </p>
        </hgroup>
      </Link>
    </li>
  );
};
