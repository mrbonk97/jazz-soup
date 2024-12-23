import { NaverMapDiv } from "../naver-map";

export const LocationMapSection = () => {
  return (
    <section className="p-5 md:px-5 md:py-10 w-full max-w-[1200px] border-b">
      <h3 className="text-xl font-bold opacity-80 text-custom-2 tracking-wider">
        지도
      </h3>
      <NaverMapDiv />
      <p className="mt-5 text-sm text-center font-semibold opacity-70">
        서울 마포구 동교로23길 64 지하
      </p>
    </section>
  );
};
