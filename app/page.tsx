import { MainCarousel } from "@/components/carousel/main-carousel";
import { ConcertCalendar } from "@/components/concert/concert-calendar";

export default function Home() {
  return (
    <main className="pt-20">
      <MainCarousel />
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
