"use client";
import { LOCATION } from "@/constants";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MenuIcon } from "lucide-react";

interface Props {
  selectedLocation: string | undefined;
}

export const TopnavLocationSmall = ({ selectedLocation }: Props) => {
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
      className="flex items-center justify-between md:hidden fixed z-10 top-20 p-5 w-full text-custom-1 bg-custom-2 duration-300"
    >
      <h2 className="font-medium">현재 지역: {selectedLocation || "전체"}</h2>
      <Drawer>
        <DrawerTrigger>
          <span className="sr-only">메뉴 열기 open menu</span>
          <MenuIcon />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>지역 변경</DrawerTitle>
            <DrawerDescription>
              다른 지역의 재즈바를 확인해보세요
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <ul className="text-sm font-bold space-y-3 max-h-[400px] overflow-y-auto">
              {LOCATION.map((item) => {
                return (
                  <DrawerClose
                    asChild
                    key={item}
                    role="button"
                    onClick={() => handleClick(item)}
                    aria-pressed={item == selectedLocation}
                    className="p-4 text-center rounded bg-custom-1 aria-pressed:bg-custom-2 aria-pressed:text-custom-1"
                  >
                    <li>{item}</li>
                  </DrawerClose>
                );
              })}
            </ul>
            <DrawerClose className="py-4 w-full border rounded">
              닫기
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </section>
  );
};
