import { TopnavLocation } from "@/components/nav/top-nav-2";
import { Metadata } from "next";
import Image from "next/image";

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
  console.log(searchParams.q);
  return (
    <main className="pl-[450px] pt-14">
      <TopnavLocation selectedLocation={searchParams.q} />
      <section className="p-5">
        <h1 className="text-lg font-medium opacity-80">
          장소: {searchParams.q ? searchParams.q : "전체"}
        </h1>
      </section>
      <section className="pt-0 p-5">
        <ul>
          <li className="flex gap-5">
            <div className="h-96 w-96 overflow-hidden rounded-xl bg-rose-200">
              <Image
                src={
                  "/images/carousel/main-carousel/construction-silhouette.jpg"
                }
                alt="img"
                height={512}
                width={512}
                className="h-96 w-96 object-cover"
              />
            </div>
            <hgroup>
              <h2 className="text-3xl font-medium opacity-80">
                대충 재즈바 이름 1
              </h2>
              <p className="mt-1 font-medium opacity-70">
                대충 서울 재즈바의 특징에 대한 문장 하나를 보여주면 좋을 것 같다
              </p>
            </hgroup>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default LocationPage;
