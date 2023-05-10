import "./App.css";

const HOLIDAYS = [
  {
    date: new Date(2023, 1 - 1, 1),
    title: "Año Nuevo",
    type: "Civil",
    inalienable: true,
    extra: "Civil e Irrenunciable",
  },
  {
    date: new Date(2023, 1 - 1, 2),
    title: "Feriado Adicional",
    type: "Civil",
    inalienable: false,
    extra: "Civil",
  },
  {
    date: new Date(2023, 4 - 1, 7),
    title: "Viernes Santo",
    type: "Religioso",
    inalienable: false,
    extra: "Religioso",
  },
  {
    date: new Date(2023, 4 - 1, 8),
    title: "Sábado Santo",
    type: "Religioso",
    inalienable: false,
    extra: "Religioso",
  },
  {
    date: new Date(2023, 5 - 1, 1),
    title: "Día Nacional del Trabajo",
    type: "Civil",
    inalienable: true,
    extra: "Civil e Irrenunciable",
  },
  {
    date: new Date(2023, 5 - 1, 21),
    title: "Día de las Glorias Navales",
    type: "Civil",
    inalienable: false,
    extra: "Civil",
  },
  {
    date: new Date(2023, 6 - 1, 21),
    title: "Día Nacional de los Pueblos Indígenas",
    type: "Civil",
    inalienable: false,
    extra: "Civil",
  },
  {
    date: new Date(2023, 6 - 1, 26),
    title: "San Pedro y San Pablo",
    type: "Religioso",
    inalienable: false,
    extra: "Religioso",
  },
  {
    date: new Date(2023, 7 - 1, 16),
    title: "Día de la Virgen del Carmen",
    type: "Religioso",
    inalienable: false,
    extra: "Religioso",
  },
  {
    date: new Date(2023, 8 - 1, 15),
    title: "Asunción de la Virgen",
    type: "Religioso",
    inalienable: false,
    extra: "Religioso",
  },
  {
    date: new Date(2023, 9 - 1, 18),
    title: "Independencia Nacional",
    type: "Civil",
    inalienable: true,
    extra: "Civil e Irrenunciable",
  },
  {
    date: new Date(2023, 9 - 1, 19),
    title: "Día de las Glorias del Ejército",
    type: "Civil",
    inalienable: true,
    extra: "Civil e Irrenunciable",
  },
  {
    date: new Date(2023, 10 - 1, 9),
    title: "Encuentro de Dos Mundos",
    type: "Civil",
    inalienable: false,
    extra: "Civil",
  },
  {
    date: new Date(2023, 10 - 1, 27),
    title: "Día de las Iglesias Evangélicas y\nProtestantes",
    type: "Religioso",
    inalienable: false,
    extra: "Religioso",
  },
  {
    date: new Date(2023, 11 - 1, 1),
    title: "Día de Todos los Santos",
    type: "Religioso",
    inalienable: false,
    extra: "Religioso",
  },
  {
    date: new Date(2023, 12 - 1, 8),
    title: "Inmaculada Concepción",
    type: "Religioso",
    inalienable: false,
    extra: "Religioso",
  },
  {
    date: new Date(2023, 12 - 1, 25),
    title: "Navidad",
    type: "Religioso",
    inalienable: true,
    extra: "Religioso e Irrenunciable",
  },
];

const timeZoneOffset = new Date().getTimezoneOffset() / 60 - 1;
const today = new Date();
console.log(
  today.toLocaleDateString("es-CL", { timeZone: "America/Santiago" })
);

const nextHoliday = HOLIDAYS.find((holiday) => holiday.date > today) || {
  ...HOLIDAYS[0],
  date: new Date(
    new Date(HOLIDAYS[0].date).getFullYear() + 1,
    new Date(HOLIDAYS[0].date).getMonth(),
    new Date(HOLIDAYS[0].date).getDate(),
    new Date(HOLIDAYS[0].date).getHours() + timeZoneOffset
  ),
};

const msDiff = new Date(nextHoliday.date).getTime() - today.getTime();

const daysDiff = Math.round(msDiff / (1000 * 3600 * 24));

function App() {
  return (
    <>
      <h1 className="text-5xl font-black underline text-purple-600 mb-4 italic">
        Next<span className="text-white">Holiday</span>
      </h1>
      <p className="text-3xl font-bold italic">
        El próximo feriado es:{" "}
        <span className="text-purple-600 font-black block">
          {nextHoliday.title}
        </span>
      </p>
      <p>
        <span className="text-purple-600 font-black block italic text-3xl">
          {nextHoliday.date.toLocaleDateString("es-CL", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
      </p>
      <p className="text-3xl font-bold italic">
        y Faltan <span className="text-purple-600 font-black">{daysDiff}</span>{" "}
        {daysDiff > 1 ? "días" : "día"}.
      </p>
    </>
  );
}

export default App;
