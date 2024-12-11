import { Button } from "../ui/button";

export const Leftnav = () => {
  return (
    <aside className="fixed -z-10 top-0 left-0 lg:pl-60 pr-2 py-16 h-full w-[450px] flex flex-col items-center gap-5 border-r">
      <Button variant={"secondary"} className="py-6 w-full font-medium">
        좋아요
      </Button>
      <Button variant={"secondary"} className="py-6 w-full font-medium">
        예약내역
      </Button>
      <Button variant={"secondary"} className="py-6 w-full font-medium">
        지도보기
      </Button>
    </aside>
  );
};
