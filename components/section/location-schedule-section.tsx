import { ConcertCalendar } from "../concert/concert-calendar";

export const LocationScheduleSection = () => {
  return (
    <section className="p-5 md:px-5 md:py-10 w-full max-w-[1200px]">
      <h3 className="text-xl font-bold opacity-80 text-custom-2 tracking-wider">
        전체 일정
      </h3>
      <div className="mt-5">
        <ConcertCalendar />
      </div>
      <ul className="mt-5 font-medium">
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
    </section>
  );
};
