import Image from "next/image";
import { BirdIcon, CitrusIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";

export const LocationLiveSection = () => {
  return (
    <section className="p-5 md:px-5 md:py-10 w-full max-w-[1200px] border-b">
      <h3 className="text-xl font-bold opacity-80 tracking-wider">
        오늘의 공연
      </h3>
      <Tabs defaultValue="first">
        <TabsList className="mt-5 h-14 px-2 w-full grid grid-cols-2 rounded-none">
          <TabsTrigger value="first" className="py-2 rounded-sm">
            1부 공연: 19:00
          </TabsTrigger>
          <TabsTrigger value="second" className="py-2 rounded-sm">
            2부 공연: 21:00
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="first"
          className="p-5 min-h-96 rounded bg-secondary"
        >
          <div className="flex flex-col md:flex-row gap-5">
            <Image
              src={"/images/jazz-trio.jpg"}
              width={512}
              height={512}
              alt="jazz trio"
              className="mt-2 rounded"
            />
            <div className="w-full flex flex-col justify-between">
              <h4 className="pt-2 text-2xl font-semibold opacity-80">
                히노끼 트리오
              </h4>
              <p className="mt-2 p-4 h-full text-sm break-keep bg-background rounded">
                대충 대한민국 호시기 호시기에서 2024년부터 활동하고 있는 세명의
                재즈밴드
              </p>
              <ul className="mt-2 p-4 text-sm space-y-2 bg-background rounded">
                <li>피아노: 김윤수</li>
                <li>베이스: 김동진</li>
                <li>트럼펫: 김기태</li>
              </ul>
              <Button className="mt-2 py-6 w-full rounded bg-custom-2 hover:bg-custom-3 text-background">
                <CitrusIcon strokeWidth={2} />
                밴드 일정 보기
              </Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent
          value="second"
          className="p-5 min-h-96 rounded bg-secondary"
        >
          <div className="h-80 p-5 flex2 flex-col gap-5 text-custom-2 font-medium">
            <BirdIcon size={48} />
            <p>등록된 공연이 없습니다...</p>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};
