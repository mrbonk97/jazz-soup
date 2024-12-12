"use client";
import Link from "next/link";
import { ProfileButton } from "./profile-button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { FormEvent, useRef } from "react";
import { useRouter } from "next/navigation";

export const Topnav = () => {
  return (
    <nav className="z-10 fixed top-0 px-20 h-14 w-full flex items-center justify-between border-b bg-background/90">
      <Link className="text-lg font-medium" href={"/"}>
        JazzSoup
      </Link>
      <SearchButton />
      <ProfileButton />
    </nav>
  );
};

const SearchButton = () => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current == null || inputRef.current == undefined) return;
    if (inputRef.current.value == "") return;
    router.push(`/search?q=${inputRef.current.value}`);
  };

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <button
        type="submit"
        className="top-1/2 left-3 -translate-y-1/2 absolute"
      >
        <SearchIcon size={16} />
      </button>
      <label htmlFor="search" className="sr-only">
        검색
      </label>
      <Input
        id="search"
        ref={inputRef}
        className="pl-8 pr-4 max-w-96 rounded-full"
        placeholder="키워드를 입력해주세요"
      />
    </form>
  );
};
