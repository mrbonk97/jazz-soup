"use client";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export const ConcertCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div>
      <Calendar mode="single" selected={date} onSelect={setDate} />
    </div>
  );
};
