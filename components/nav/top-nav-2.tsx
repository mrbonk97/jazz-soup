"use client";
import { LOCATION } from "@/constants";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface Props {
  selectedLocation: string | undefined;
}

export const TopnavLocation = ({ selectedLocation }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    let initScrollPos = window.scrollY;

    const handleScroll = () => {
      if (!ref.current) return;
      const currentScrollPos = window.scrollY;
      ref.current!.style.top =
        initScrollPos > currentScrollPos ? "80px" : "0px";
      initScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="hidden md:flex fixed z-10 top-20 p-5 px-10 w-full items-center justify-center bg-custom-2 duration-300"
    >
      <ul className="max-w-[1200px] flex2 flex-wrap gap-2 lg:gap-4 text-sm font-bold">
        {LOCATION.map((item) => {
          const url =
            item == selectedLocation ? "/locations" : `/locations?gu=${item}`;

          return (
            <li key={item} className="flex-shrink-0">
              <Link
                href={url}
                aria-current={item == selectedLocation && "page"}
                className={`px-4 py-2 rounded-md text-background hover:bg-background hover:text-custom-2 duration-150 tracking-wider
                   ${item == selectedLocation && "bg-background text-custom-2"}
                  `}
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
