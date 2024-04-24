import { cardsInfo } from '@/constants/cards';

export function getCardLogo (cardNumber: string): string | null {
  for (const card of cardsInfo) {
    const regex = new RegExp(card.re);
    if (regex.test(cardNumber)) {
      return card.logo;
    }
  }

  return null;
}
