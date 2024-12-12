import { ConcertCalendar } from "@/components/concert/concert-calendar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-14 pl-[450px] pr-96">
      <section className="h-96 flex items-center justify-center">
        <Image src={"/logo.png"} width={512} height={512} alt="logo" />
      </section>
      <section className="mt-10 p-5 pr-0">
        <h2 className="text-lg font-medium opacity-80">이번달 공연</h2>
        <div className="mt-2 flex gap-5">
          <ConcertCalendar />
          <div className="h-[450px] w-full bg-rose-200"></div>
        </div>
      </section>
      <section className="mt-10 p-5 pr-0">
        <h2 className="text-lg font-medium opacity-80">지도로 살펴보기</h2>
        <div className="mt-2 h-[500px] w-full bg-rose-100"></div>
      </section>
      <section className="mt-10 p-5 pr-0">
        <h2 className="text-lg font-medium opacity-80">주인장 리뷰</h2>
        <div className="mt-2 h-[500px] w-full bg-rose-100"></div>
      </section>
      <section className="mt-10 p-5 pr-0">
        <h2 className="text-lg font-medium opacity-80">이번주 재즈 스탠다드</h2>
        <div className="mt-2 h-[500px] w-full bg-rose-100"></div>
      </section>
    </main>
  );
}
