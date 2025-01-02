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
    if (selectedLocation == e) router.push(`/locations`);
    else router.push(`/location?q=${e}`);
  };

  useEffect(() => {
    if (!ref.current) return;
    let initScrollPos = window.scrollY;

    const handleScroll = () => {
      if (!ref.current) return;
      const currentScrollPos = window.scrollY;
      ref.current!.style.top =
        initScrollPos > currentScrollPos ? "56px" : "0px";
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
      className="fixed z-10 top-14 px-5 py-2 w-full flex md:hidden items-center justify-between bg-custom-2 text-background duration-300"
    >
      <h2 className="text-sm font-medium">
        현재 지역: {selectedLocation || "전체"}
      </h2>
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
            <ul className="px-5 max-h-[400px] text-sm font-bold space-y-3 overflow-y-auto">
              {LOCATION.map((item) => {
                return (
                  <DrawerClose
                    asChild
                    key={item}
                    role="button"
                    onClick={() => handleClick(item)}
                    aria-pressed={item == selectedLocation}
                    className="p-4 text-center rounded bg-secondary aria-pressed:bg-custom-2 aria-pressed:text-background"
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
