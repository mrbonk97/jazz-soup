import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* Upper Title Section */}
      <section className="z-10 sticky top-0 w-full flex2 bg-custom-3 border-t-8 md:border-t-[20px] border-custom-2">
        <Image
          src={"/logo.png"}
          alt="logo"
          height={192}
          width={192}
          className="py-3 md:py-4 w-24 md:w-48"
        />
      </section>
      {/* Nav Button Section */}
      <section className="w-full flex2 border-y text-sm md:text-xl">
        <nav className="p-5 py-2 md:py-5 w-full max-w-[1500px] flex items-center justify-between">
          <div className="hidden md:block" />
          <ul className="flex gap-5 md:gap-20 font-medium">
            <li role="button">
              <Link
                href={"/locations"}
                className="hover:text-custom-2 hover:underline underline-offset-4 duration-150"
              >
                재즈바
              </Link>
            </li>
            <li role="button">
              <Link
                href={"/lives"}
                className="hover:text-custom-2 hover:underline underline-offset-4 duration-150"
              >
                공연
              </Link>
            </li>
            <li role="button">
              <Link
                href={"/artists"}
                className="hover:text-custom-2 hover:underline underline-offset-4 duration-150"
              >
                아티스트
              </Link>
            </li>
          </ul>
          <ul className="flex gap-2">
            <li>
              <Button variant={"secondary"} className="rounded-none">
                로그인
              </Button>
            </li>
            <li>
              <Button className="rounded-none">회원가입</Button>
            </li>
          </ul>
        </nav>
      </section>
      {/* HEAD ARTICLE */}
      <section className="mt-5 md:mt-16 p-5 pb-2 md:pb-5 w-full max-w-[1500px] grid grid-cols-3 gap-x-5 gap-y-2">
        <h1 className="w-full col-span-3 eulyoo text-lg md:text-3xl text-right opacity-80">
          서울의 모든 재즈
        </h1>
        <article className="relative h-96 md:h-[600px] w-full col-span-3 md:col-span-1">
          <hgroup className="absolute top-0 px-5 py-3 w-full text-secondary bg-gradient-to-r from-black/90">
            <p className="text-sm">추천하는 재즈바</p>
            <h4 className="text-2xl eulyoo -ml-0.5">연남5701</h4>
          </hgroup>
          <Image
            src={"/images/location/jazz_lounge.jpg"}
            width={1920}
            height={1920}
            alt="jazz"
            className="h-full w-full object-cover"
          />
          <Button
            variant="outline"
            className="absolute right-2 bottom-2 h-12 w-40"
          >
            둘러보기
          </Button>
        </article>
        <article className="h-96 md:h-[600px] w-full col-span-3 md:col-span-2 bg-custom-1/50"></article>
      </section>
      {/* SEARCH SECTION */}
      <form className="px-5 relative w-full max-w-[1500px]">
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

      {/* FAVORITE SECTION */}
      <section className="mt-10 p-5 w-full max-w-[1500px]">
        <h4 className="text-2xl eulyoo">관심 목록</h4>
        <p className="pb-2 eulyoo opacity-80 border-b">
          선호하는 아티스트를 추가하여 놓치지 마세요
        </p>
        <ul className="mt-10 col-span-3 flex gap-20">
          <li
            role="button"
            className="h-20 w-20 flex2 rounded-full text-custom-1 bg-custom-2"
          >
            <PlusIcon />
          </li>
        </ul>
      </section>
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
