import { MainCarousel } from "@/components/carousel/main-carousel";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const ArtistPage = () => {
  return (
    <main className="pt-20 flex flex-col items-center">
      <MainCarousel />
      {/* BANNER */}
      <section className="w-full flex justify-center bg-custom-2">
        <h1 className="p-5 w-full max-w-[1500px] font-semibold text-background">
          한국에서 활동 중인 아티스트를 소개합니다
        </h1>
      </section>
      {/* SEARCH BOX */}
      <section className="mt-5 p-5 w-full flex justify-center">
        <form className="relative w-full max-w-[1500px]">
          <button
            className="absolute top-1/2 -translate-y-1/2 h-12 aspect-square flex2 opacity-70 hover:opacity-100 hover:bg-secondary duration-150"
            type="submit"
          >
            <SearchIcon />
          </button>
          <Input
            className="px-14 h-12 w-full text-xl rounded-none shadow-none"
            placeholder="아티스트를 검색하세요"
          />
        </form>
      </section>
      {/* ARTIST LIST */}
      <section className="p-5 w-full flex justify-center">
        <ul className="w-full max-w-[1500px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <li>
            <ArtistCard />
          </li>
          <li>
            <ArtistCard />
          </li>
          <li>
            <ArtistCard />
          </li>
          <li>
            <ArtistCard />
          </li>
        </ul>
      </section>
    </main>
  );
};

const ArtistCard = () => {
  return (
    <Card className="rounded-none shadow-none h-[450px]">
      <CardHeader>
        <CardTitle>밴드 히히</CardTitle>
      </CardHeader>
    </Card>
  );
};

export default ArtistPage;
