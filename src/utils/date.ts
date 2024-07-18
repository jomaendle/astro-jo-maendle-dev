export function getMonthAndYear(date: Date | string | undefined) {
  if (!date) {
    return null;
  }

  const d = new Date(date);
  return (
    d.toLocaleString("default", { month: "short" }) + " " + d.getFullYear()
  );
}
