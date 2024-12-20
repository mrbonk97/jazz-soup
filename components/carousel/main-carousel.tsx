"use client";
import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";

export const MainCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative">
      <Carousel setApi={setApi}>
        <CarouselContent>
          <CarouselItem>
            <ItemCard imageUrl="/images/jazz-band1.jpg" title="" />
          </CarouselItem>
          <CarouselItem>
            <ItemCard
              imageUrl="/images/carousel/main-carousel/construction-silhouette.jpg"
              title=""
            />
          </CarouselItem>
          <CarouselItem>
            <ItemCard
              imageUrl="/images/carousel/main-carousel/beautiful-mountain-landscape.jpg"
              title=""
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
      <div className="absolute right-5 bottom-5 text-center text-sm text-muted-foreground">
        {current} / {count}
      </div>
    </div>
  );
};

interface ItemCardProps {
  imageUrl: string;
  title: string;
}

const ItemCard = ({ imageUrl, title }: ItemCardProps) => {
  return (
    <article className="h-[700px] relative w-full flex2 bg-neutral-800/60">
      <Image
        src={imageUrl}
        alt="mountail"
        height={1000}
        width={1000}
        className="-z-10 absolute top-0 left-0 object-cover h-full w-full opacity-50"
      />
      <Image
        src={imageUrl}
        alt="mountail"
        width={700}
        height={700}
        className="h-full object-cover"
      />
      {/* <h3 className="pt-20 pr-10 text-center text-4xl font-bold text-white">
        {title}
      </h3> */}
    </article>
  );
};
