export enum EnumMonthLength {
  Long = 'long',
  Numeric = 'numeric',
  TwoDigit = '2-digit',
  Short = 'short',
  Narrow = 'narrow',
}

export function generateMonthNames (monthLength: EnumMonthLength, locale?: string) {
  const monthNames: string[] = [];
  const baseDate = new Date(2023, 0, 1); // 1 января 2023 года

  for (let i = 0; i < 12; i++) {
    const month = baseDate.toLocaleString(locale, { month: monthLength });
    monthNames.push(month);
    baseDate.setMonth(baseDate.getMonth() + 1);
  }

  return monthNames;
}
