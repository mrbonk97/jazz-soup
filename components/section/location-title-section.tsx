import { ClubIcon } from "lucide-react";

interface Props {
  title: string;
}

export const LocationTitleSection = ({ title }: Props) => {
  return (
    <section className="py-2 md:py-5 p-5 w-full flex justify-center bg-custom-1 border-b">
      <hgroup className="w-full max-w-[1200px]">
        <h3 className="text-xs md:text-sm font-medium opacity-80">
          지역: 강서구
        </h3>
        <h1 className="text-xl md:text-3xl font-bold opacity-80">
          <ClubIcon
            className="inline mb-1.5 mr-2 text-custom-2"
            strokeWidth={3}
            size={18}
          />
          {title}
        </h1>
      </hgroup>
    </section>
  );
};
