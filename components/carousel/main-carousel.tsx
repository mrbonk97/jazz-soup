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
    <section className="relative">
      <Carousel setApi={setApi}>
        <CarouselContent>
          <CarouselItem>
            <ItemCard
              imageUrl="/images/carousel/main-carousel/beautiful-mountain-landscape.jpg"
              title="재즈 수프, 히히히"
            />
          </CarouselItem>
          <CarouselItem>
            <ItemCard
              imageUrl="/images/carousel/main-carousel/construction-silhouette.jpg"
              title="생각나는 제목2"
            />
          </CarouselItem>
          <CarouselItem>
            <ItemCard
              imageUrl="/images/carousel/main-carousel/full-shot-plus-sized-woman-stretching.jpg"
              title="생각나는 제목3"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
      <div className="absolute right-5 bottom-5 text-center text-sm text-muted-foreground">
        {current} / {count}
      </div>
    </section>
  );
};

interface ItemCardProps {
  imageUrl: string;
  title: string;
}

const ItemCard = ({ imageUrl, title }: ItemCardProps) => {
  return (
    <article className="h-[700px] w-full relative">
      <Image
        src={imageUrl}
        alt="mountail"
        height={1080}
        width={1920}
        className="absolute -z-10 top-0 left-0 object-cover"
      />
      <h3 className="pt-20 pr-10 text-center text-4xl font-bold text-white">
        {title}
      </h3>
    </article>
  );
};
