import "./App.css";

const HOLIDAYS = [
  {
    date: new Date("2023-01-01 00:00:00"),
    title: "Año Nuevo",
    type: "Civil",
    inalienable: true,
    extra: "Civil e Irrenunciable",
  },
  {
    date: new Date("2023-01-02 00:00:00"),
    title: "Feriado Adicional",
    type: "Civil",
    inalienable: false,
    extra: "Civil",
  },
  {
    date: new Date("2023-04-07 00:00:00"),
    title: "Viernes Santo",
    type: "Religioso",
    inalienable: false,
    extra: "Religioso",
  },
  {
    date: new Date("2023-04-08 00:00:00"),
    title: "Sábado Santo",
    type: "Religioso",
    inalienable: false,
    extra: "Religioso",
  },
  {
    date: new Date("2023-05-01 00:00:00"),
    title: "Día Nacional del Trabajo",
    type: "Civil",
    inalienable: true,
    extra: "Civil e Irrenunciable",
  },
  {
    date: new Date("2023-05-21 00:00:00"),
    title: "Día de las Glorias Navales",
    type: "Civil",
    inalienable: false,
    extra: "Civil",
  },
  {
    date: new Date("2023-05-30 00:00:00"),
    title: "Nedilio day",
    type: "Civil",
    inalienable: false,
    extra: "Civil",
  },
  {
    date: new Date("2023-06-21 00:00:00"),
    title: "Día Nacional de los Pueblos Indígenas",
    type: "Civil",
    inalienable: false,
    extra: "Civil",
  },
  {
    date: new Date("2023-06-26 00:00:00"),
    title: "San Pedro y San Pablo",
    type: "Religioso",
    inalienable: false,
    extra: "Religioso",
  },
  {
    date: new Date("2023-07-16 00:00:00"),
    title: "Día de la Virgen del Carmen",
    type: "Religioso",
    inalienable: false,
    extra: "Religioso",
  },
  {
    date: new Date("2023-08-15 00:00:00"),
    title: "Asunción de la Virgen",
    type: "Religioso",
    inalienable: false,
    extra: "Religioso",
  },
  {
    date: new Date("2023-09-18 00:00:00"),
    title: "Independencia Nacional",
    type: "Civil",
    inalienable: true,
    extra: "Civil e Irrenunciable",
  },
  {
    date: new Date("2023-09-19 00:00:00"),
    title: "Día de las Glorias del Ejército",
    type: "Civil",
    inalienable: true,
    extra: "Civil e Irrenunciable",
  },
  {
    date: new Date("2023-10-09 00:00:00"),
    title: "Encuentro de Dos Mundos",
    type: "Civil",
    inalienable: false,
    extra: "Civil",
  },
  {
    date: new Date("2023-10-27 00:00:00"),
    title: "Día de las Iglesias Evangélicas y\nProtestantes",
    type: "Religioso",
    inalienable: false,
    extra: "Religioso",
  },
  {
    date: new Date("2023-11-01 00:00:00"),
    title: "Día de Todos los Santos",
    type: "Religioso",
    inalienable: false,
    extra: "Religioso",
  },
  {
    date: new Date("2023-12-08 00:00:00"),
    title: "Inmaculada Concepción",
    type: "Religioso",
    inalienable: false,
    extra: "Religioso",
  },
  {
    date: new Date("2023-12-25 00:00:00"),
    title: "Navidad",
    type: "Religioso",
    inalienable: true,
    extra: "Religioso e Irrenunciable",
  },
];

const today = new Date();

const nextHoliday = HOLIDAYS.find((holiday) => holiday.date > today) || {
  ...HOLIDAYS[0],
  date: new Date(
    new Date(HOLIDAYS[0].date).getFullYear() + 1,
    new Date(HOLIDAYS[0].date).getMonth(),
    new Date(HOLIDAYS[0].date).getDate(),
    new Date(HOLIDAYS[0].date).getHours()
  ),
};

const msDiff = nextHoliday.date.getTime() - today.getTime();

const daysDiff = Math.ceil(msDiff / 86400000);

function App() {
  return (
    <>
      <h1 className="text-5xl font-black text-purple-600 mb-4 italic">
        Next<span className="text-white">Holiday</span>📅
      </h1>

      <h2 className="text-2xl font-black text-purple-600 mb-4 italic">
        {"Hoy es: " + today.toLocaleDateString("es-CL")}
      </h2>
      <p className="text-3xl font-bold italic">
        El próximo feriado es:{" "}
        <span className="text-purple-600 font-black block">
          {nextHoliday.title}
        </span>
      </p>
      <p>
        <span className="text-purple-600 font-bold block italic text-3xl">
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
        <span className="text-purple-600 font-black">{daysDiff}</span>
        {daysDiff > 1 ? " días" : " día"}.
      </p>
    </>
  );
}

export default App;
