import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* Upper Title Section */}
      <section className="z-10 sticky top-0 h-48 w-full flex2 bg-background border-t-[20px] border-[#014CBB]">
        <Image src={"/logo.png"} alt="logo" height={192} width={192} />
      </section>
      {/* Nav Button Section */}
      <section className="py-5 w-full flex2 border-y">
        <ul className="flex gap-20 text-lg font-medium">
          <li role="button">
            <Link href={"/location"} className="hover:text-custom-2">
              재즈바
            </Link>
          </li>
          <li role="button">
            <Link href={"/live"}>공연</Link>
          </li>
          <li role="button">
            <Link href={"/artists"}>아티스트</Link>
          </li>
        </ul>
      </section>
      <h1 className="mt-8 w-full max-w-[1500px] text-2xl font-semibold text-right opacity-80">
        서울의 모든 재즈바
      </h1>
      {/* HEAD ARTICLE */}
      <section className="mt-2 w-full max-w-[1500px] grid grid-cols-3 gap-x-5 gap-y-2">
        <article className="relative h-[600px] w-full col-span-1">
          <hgroup className="px-5 py-3 font-medium text-custom-1 bg-gradient-to-r from-black/60">
            <p className="text-sm">추천하는 재즈바</p>
            <h4 className="text-2xl">연남5701</h4>
          </hgroup>
          <Button
            variant="outline"
            className="absolute right-2 bottom-2 h-12 w-40 rounded-none"
          >
            둘러보기
          </Button>
          <Image
            src={"/images/location/jazz_lounge.jpg"}
            width={1920}
            height={1920}
            alt="jazz"
            className="absolute top-0 left-0 h-full w-full object-cover"
          />
        </article>
        <article className="h-[600px] w-full col-span-2 bg-rose-100">a</article>
      </section>
      <form className="mt-5 relative w-full max-w-[1500px]">
        <button
          className="absolute top-1/2 -translate-y-1/2 h-12 aspect-square flex2 opacity-70 hover:opacity-100 hover:bg-secondary duration-150"
          type="submit"
        >
          <SearchIcon />
        </button>
        <Input
          className="px-14 h-12 w-full text-xl rounded-none shadow-none"
          placeholder="장소나 밴드로 검색하세요"
        />
      </form>

      <ul className="mt-10 col-span-3 flex justify-center gap-20">
        <li className="h-60 w-60 rounded-full bg-rose-100"></li>
        <li className="h-60 w-60 rounded-full bg-rose-100"></li>
        <li className="h-60 w-60 rounded-full bg-rose-100"></li>
      </ul>
    </main>
  );
}

{
  /* <section className="py-2 bg-custom-2 text-custom-1">
        <ul
          role="banner"
          className="flex justify-around flex-nowrap banner-scroll"
        >
          {Array.from({ length: 10 }).map((_, idx) => {
            return (
              <li key={idx} className="item">
                {idx % 2 == 0 ? "Jazz Soup" : "재즈 수프"}
              </li>
            );
          })}
        </ul>
      </section> */
}
