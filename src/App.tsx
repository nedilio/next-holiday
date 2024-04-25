import { useEffect, useState } from "react";
import "./App.css";
import useToday from "./hooks/useToday";
import { getHolidays } from "./services/index";

const today = new Date();

function App() {
  const { today: now } = useToday();
  const [holidays, setHolidays] = useState<
    | {
        date: Date;
        title: string;
      }[]
    | null
  >(null);
  useEffect(() => {
    getHolidays().then((res) => setHolidays(res));
  });
  if (!holidays) return <p>Loading...</p>;

  const nextHoliday = holidays.find((holiday) => holiday.date > today) || {
    ...holidays[0],
    date: new Date(
      new Date(holidays[0].date).getFullYear() + 1,
      new Date(holidays[0].date).getMonth(),
      new Date(holidays[0].date).getDate(),
      new Date(holidays[0].date).getHours()
    ),
  };

  const msDiff = nextHoliday.date.getTime() - today.getTime();

  const daysDiff = Math.ceil(msDiff / 86400000);

  return (
    <>
      <h1 className="text-5xl font-black text-purple-500 mb-4 italic">
        Next<span className="text-white">Holiday</span>📅
      </h1>

      <h2 className="text-2xl font-semibold text-purple-500 mb-4 italic">
        {"Hoy es: " +
          now.toLocaleDateString("es-CL", {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
          })}
      </h2>
      <p className="text-3xl font-bold italic">
        El próximo feriado es:{" "}
        <span className="text-purple-500 font-black block">
          {nextHoliday.title}
        </span>
      </p>
      <p>
        <span className="text-purple-500 font-bold block italic text-3xl">
          {nextHoliday.date.toLocaleDateString("es-CL", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
      </p>
      <p className="text-3xl font-bold italic">
        y {daysDiff > 1 ? "Faltan " : "Falta "}
        <span className="text-purple-500 font-black">{daysDiff}</span>
        {daysDiff > 1 ? " días" : " día"}.
      </p>
      <h2 className="text-2xl font-bold mb-4 italic mt-8">
        <span className="text-purple-500">Próximos</span>Feriados
      </h2>
      {holidays
        .filter((holiday) => holiday.date > now)
        .map((holiday) => (
          <div
            key={holiday.date.getTime()}
            className="flex gap-2 text-sm font-bold italic justify-center"
          >
            <p>{holiday.title}</p>
            <p className="text-purple-500">
              {holiday.date.toLocaleDateString("es-CL", {
                day: "numeric",
                month: "short",
              })}
            </p>
          </div>
        ))}
    </>
  );
}

export default App;
