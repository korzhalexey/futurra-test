export const splitWords = (word: string) => word.match(/[A-Z][a-z]*/g) ?? [];
