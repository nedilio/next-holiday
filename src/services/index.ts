export const getHolidays = async (): Promise<
  { date: Date; title: string }[]
> => {
  const MONTHS: Record<string, string> = {
    Enero: "01",
    Febrero: "02",
    Marzo: "03",
    Abril: "04",
    Mayo: "05",
    Junio: "06",
    Julio: "07",
    Agosto: "08",
    Septiembre: "09",
    Octubre: "10",
    Noviembre: "11",
    Diciembre: "12",
  };
  const res = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQWguUGcl-v0rYpFaqt5Dm6fV9jG67-iB_Gqk2FsljyyPML4rkX8foij-kjlNnHpQvjxCR5yBgtvziJ/pub?gid=0&single=true&output=tsv"
  );
  if (!res.ok) throw new Error("Error fetching holidays");
  const csv = await res.text();

  const rows = csv.split("\n");
  const holidays = rows.map((row) => {
    const [dia, title] = row.split("\t");
    const [, textDate] = dia.split(", ");
    const [day, month] = textDate.split(" de ");

    const date = new Date(`2025-${MONTHS[month]}-${day} 00:00:00`);
    return {
      date,
      title,
    };
  });

  return holidays
    .filter((holiday) => holiday.title)
    .sort((a, b) =>
      b.date.getTime() - a.date.getTime()
        ? 1
        : b.date.getTime() - a.date.getTime()
        ? -1
        : 0
    ) as unknown as {
    date: Date;
    title: string;
  }[];
};
