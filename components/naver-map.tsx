"use client";
import { useEffect, useRef } from "react";

export const NaverMapDiv = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const center: naver.maps.LatLng = new naver.maps.LatLng(
      37.3595704,
      127.105399
    );

    new naver.maps.Map(ref.current, {
      center: center,
      zoom: 16,
    });
  }, []);

  return (
    <div
      ref={ref}
      className="mt-5 md:mt-5 h-96 md:h-[550px] w-full md:border rounded"
    />
  );
};
