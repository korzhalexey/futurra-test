export function generateNextYears (count: number) {
  const years: number[] = [];
  const baseDate = new Date();
  const year = baseDate.getFullYear();

  for (let i = 0; i < count; i++) {
    years.push(year + i);
  }

  return years;
}
