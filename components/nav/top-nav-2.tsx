"use client";
import { LOCATION } from "@/constants";
import { useRouter } from "next/navigation";

interface Props {
  selectedLocation: string | undefined;
}

export const TopnavLocation = ({ selectedLocation }: Props) => {
  const router = useRouter();

  const handleClick = (e: string) => {
    if (selectedLocation == e) router.push(`/location`);
    else router.push(`/location?q=${e}`);
  };

  return (
    <section className="px-10 p-5 w-full border-b bg-secondary">
      <ul className="flex gap-4 flex-wrap items-center justify-center">
        {LOCATION.map((item) => {
          return (
            <li
              key={item}
              role="button"
              onClick={() => handleClick(item)}
              aria-selected={item == selectedLocation}
              className="px-4 py-2 flex-shrink-0 rounded-md bg-background text-sm font-medium hover:bg-rose-100 duration-150 aria-selected:bg-rose-100"
            >
              <span className="font-medium opacity-80">{item}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
