import { HeartIcon, MapIcon, MusicIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export const Leftnav = () => {
  return (
    <aside className="fixed top-0 left-0 lg:pl-60 pr-2 py-16 h-full w-[450px] flex flex-col items-end gap-5 border-r">
      <Button
        asChild
        variant={"secondary"}
        className="py-6 w-36 font-medium flex justify-end hover:bg-rose-100"
      >
        <Link href={"/location"}>
          재즈바
          <MusicIcon stroke="#78350f" />
        </Link>
      </Button>
      <Button
        asChild
        variant={"secondary"}
        className="py-6 w-36 font-medium flex justify-end hover:bg-rose-100"
      >
        <Link href={"/favorite"}>
          좋아요
          <HeartIcon fill="#fda4af" stroke="#fda4af" />
        </Link>
      </Button>
      <Button
        asChild
        variant={"secondary"}
        className="py-6 w-36 font-medium flex justify-end hover:bg-rose-100"
      >
        <Link href={"/map"}>
          지도보기
          <MapIcon stroke="#4ade80" fill="#afe2c2" />
        </Link>
      </Button>
    </aside>
  );
};
