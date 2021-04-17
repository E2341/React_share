import { format as formatDate, parseISO } from "date-fns";

export const formatDateFunc = (date) => {
  return formatDate(parseISO(date?.registerDate), "MM/dd/yyyy");
};