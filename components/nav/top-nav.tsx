"use client";
import Link from "next/link";
import { ProfileButton } from "./profile-button";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { TOP_MENU } from "@/constants";
import Image from "next/image";

export const Topnav = () => {
  const pathName = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    let initScrollPos = window.scrollY;
    const navHeight = ref.current.offsetHeight;

    window.addEventListener("scroll", () => {
      const currentScrollPos = window.scrollY;
      ref.current!.style.top =
        initScrollPos > currentScrollPos ? "0" : `-${navHeight}px`;
      initScrollPos = currentScrollPos;
    });
  }, []);

  return (
    <nav
      ref={ref}
      className="fixed z-10 top-0 px-5 md:px-20 h-14 md:h-20 w-full flex items-center justify-between border-b bg-background duration-300"
    >
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          alt="logo"
          width={80}
          height={50}
          className="w-12 md:w-16"
        />
      </Link>
      <ul className="text-xs lg:text-lg font-bold space-x-5 lg:space-x-10">
        {TOP_MENU.map((item) => (
          <li key={item.url} className="inline">
            <Link
              aria-selected={pathName.startsWith(item.url)}
              href={item.url}
              className="hover:underline hover:text-custom-2 underline-offset-4 text-neutral-700 aria-selected:text-custom-2"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <ProfileButton />
    </nav>
  );
};

// const SearchButton = () => {
//   const router = useRouter();
//   const inputRef = useRef<HTMLInputElement>(null);
//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (inputRef.current == null || inputRef.current == undefined) return;
//     if (inputRef.current.value == "") return;
//     router.push(`/search?q=${inputRef.current.value}`);
//   };

//   return (
//     <form className="relative" onSubmit={handleSubmit}>
//       <button
//         type="submit"
//         className="top-1/2 left-3 -translate-y-1/2 absolute"
//       >
//         <SearchIcon size={16} />
//       </button>
//       <label htmlFor="search" className="sr-only">
//         검색
//       </label>
//       <Input
//         id="search"
//         ref={inputRef}
//         className="pl-8 pr-4 max-w-96 rounded-full"
//         placeholder="키워드를 입력해주세요"
//       />
//     </form>
//   );
// };
