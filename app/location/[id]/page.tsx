import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

interface Props {
  params: {
    id: string;
  };
}

export const generateMetadata = async (
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  console.log(parent);
  return {
    title: params.id,
  };
};

const LocationDetailPage = ({ params }: Props) => {
  return (
    <main className="pt-14 pl-[450px]">
      <section className="p-5">
        <h1 className="text-2xl font-bold opacity-80">{params.id}</h1>
        <Image
          src={
            "/images/carousel/main-carousel/beautiful-mountain-landscape.jpg"
          }
          alt="allThatjazz"
          width={512}
          height={512}
        />
      </section>
    </main>
  );
};

export default LocationDetailPage;
