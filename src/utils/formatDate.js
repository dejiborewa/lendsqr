export default function FormatDate(date) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  return `${months[parseInt(date?.slice(5, 7), 10) - 1]}, ${date?.slice(
    0,
    4
  )} ${date?.slice(11, 16)}`;
}
