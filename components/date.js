import { parseISO, format } from "date-fns";
// import { es } from "date-fns/locale";
// agregar como segundo parametro a format fn -> { locale: es }

export default function Date({ dateString }) {
  const date = parseISO(dateString);

  return (
    <time dateTime={dateString} className="text-gray-600 capitalize text-xs block font-inter">
      {format(date, "LLLL d, yyyy")}
    </time>
  );
}
