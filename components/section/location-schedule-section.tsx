import { ConcertCalendar } from "../concert/concert-calendar";

export const LocationScheduleSection = () => {
  return (
    <section className="mt-5">
      <div className="py-2 px-4 w-full bg-custom-2 text-background text-lg">
        전체 일정
      </div>
      <div className="mt-5 flex flex-col md:flex-row items-center md:items-start gap-5">
        <ConcertCalendar />
        <ul className="w-full font-medium">
          <li className="p-2 h-20 border-y">
            <p>1부: 호시기 퀸텟</p>
            <p className="mt-0.5 text-sm opacity-70">
              기타: 김동혁, 피아노: 이문철, 드럼: 김우걸
            </p>
          </li>
          <li className="p-2 h-20 border-b">
            <p>2부: 또봉이 듀오</p>
            <p className="mt-0.5 text-sm opacity-70">
              기타: 김동혁, 피아노: 이문철, 드럼: 김우걸
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
