const months = ["янв", "фев", "мар", "апр", "мая", "июня", "июля", "авг", "сен", "окт",  "ноя", "дек"];
const days = ["Вск", "Пнд", "Вт", "Ср", "Чт", "Пт", "Сб"];

const VALID_DATE_REGEX = /(\d{2}).(\d{2}).(\d{2})/

export const formatDate = (date: string) => {
  if (!VALID_DATE_REGEX.test(date)) {
    console.error('Invalid ticket date');
    return "";
  }
  //for IE11 support
  const dateArray = date.split(".");
  const ISOString = `20${dateArray[2]}-${dateArray[1]}-${dateArray[0]}T00:00:00.000Z`;
  const newDate = new Date(ISOString);

  const year = newDate.getFullYear();
  const monthIndex = newDate.getMonth();
  const dayNumber = newDate.getDate();
  const weeDayNumber = newDate.getDay();

  const month = months[monthIndex];
  const weekDay = days[weeDayNumber];

  return `${dayNumber} ${month} ${year}, ${weekDay}`;
};
