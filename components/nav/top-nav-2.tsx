"use client";
import { LOCATION } from "@/constants";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

interface Props {
  selectedLocation: string | undefined;
}

export const TopnavLocation = ({ selectedLocation }: Props) => {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = (e: string) => {
    if (selectedLocation == e) router.push(`/location`);
    else router.push(`/location?q=${e}`);
  };

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
      className="fixed z-10 top-20 p-5 px-10 h-32 w-full bg-custom-2 flex2 duration-300"
    >
      <ul className="flex2 flex-wrap gap-4 text-sm font-bold lg:max-w-[1200px]">
        {LOCATION.map((item) => {
          return (
            <li
              key={item}
              role="button"
              onClick={() => handleClick(item)}
              aria-pressed={item == selectedLocation}
              className="px-4 py-2 flex-shrink-0 rounded-md text-custom-1 hover:bg-custom-1 hover:text-custom-2 duration-150 aria-pressed:bg-custom-1 aria-pressed:text-custom-2 tracking-wider"
            >
              {item}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
