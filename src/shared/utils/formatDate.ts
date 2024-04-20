import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import 'dayjs/locale/ru';

dayjs.extend(customParseFormat);
dayjs.locale('ru');

export const formatDate = (dateString: string) => {
  const date = dayjs(dateString, 'DD.MM.YY');
  const dayOfWeek =
    date.format('dd').charAt(0).toUpperCase() + date.format('dd').slice(1);
  return `${date.format('D MMMM YYYY')}, ${dayOfWeek}`;
};
