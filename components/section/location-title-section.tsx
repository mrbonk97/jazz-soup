"use client";
import { useEffect, useRef } from "react";

interface Props {
  title: string;
  address: string;
}

export const LocationTitleSection = ({ title, address }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  // 화면의 너비가 768 보다 작으면 상단바의 높이인 56px만큼 올림
  // 그것보다 크면 80px만큼 올림
  useEffect(() => {
    if (!ref.current) return;
    let initScrollPos = window.scrollY;

    window.addEventListener("scroll", () => {
      if (!ref.current) return;

      const currentScrollPos = window.scrollY;
      const curWidth = window.innerWidth;
      const height = curWidth < 768 ? 56 : 80;

      ref.current!.style.top =
        initScrollPos > currentScrollPos ? `${height}px` : `0px`;
      initScrollPos = currentScrollPos;
    });
  }, []);

  return (
    <section
      ref={ref}
      className="fixed z-10 top-14 md:top-20 h-14 md:h-20 w-full flex2 bg-custom-2 text-background duration-300"
    >
      <div className="px-5 w-full max-w-[1280px]">
        <hgroup className="w-full">
          <h1 className="text-lg md:text-3xl font-semibold">{title}</h1>
          <h3 className="-mt-1 md:mt-0 text-xs md:text-base font-medium opacity-90">
            {address}
          </h3>
        </hgroup>
      </div>
    </section>
  );
};
