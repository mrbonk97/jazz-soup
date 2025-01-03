import { MapPin } from "lucide-react";
import { NaverMapDiv } from "../naver-map";

export const LocationMapSection = () => {
  return (
    <section className="mt-5">
      <div className="py-2 px-4 w-full bg-custom-2 text-background text-lg">
        위치
      </div>
      <NaverMapDiv />
      <p className="mt-2 text-sm text-center font-semibold opacity-70">
        <MapPin size={18} strokeWidth={2} className="inline text-custom-1" />
        서울 마포구 동교로23길 64 지하
      </p>
    </section>
  );
};
