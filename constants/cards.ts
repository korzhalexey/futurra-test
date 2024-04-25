import VisaLogo from '~/public/cards/visa.svg';
import HiperCardLogo from '~/public/cards/hipercard.svg';
import MasterCardLogo from '~/public/cards/mastercard.svg';
import DiscoverNetworkLogo from '~/public/cards/discover-network.svg';
import EloLogo from '~/public/cards/elo.svg';
import AmericanExpress from '~/public/cards/american-express.svg';

export const cardsInfo = [
  {
    name: 'Visa',
    logo: VisaLogo,
    re: '^4',
  },
  {
    name: 'Hipercard',
    logo: HiperCardLogo,
    re: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/,
  },
  {
    name: 'Master Card',
    logo: MasterCardLogo,
    re: /^(5[1-5]|677189)|^(222[1-9]|2[3-6]\d{2}|27[0-1]\d|2720)/,
  },
  {
    name: 'Discover',
    logo: DiscoverNetworkLogo,
    re: /^(6011|65|64[4-9]|622)/,
  },
  {
    name: 'Elo',
    logo: EloLogo,
    re: /^(4011(78|79)|43(1274|8935)|45(1416|7393|763(1|2))|50(4175|6699|67[0-7][0-9]|9000)|627780|63(6297|6368)|650(03([^4])|04([0-9])|05(0|1)|4(0[5-9]|3[0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8])|9([2-6][0-9]|7[0-8])|541|700|720|901)|651652|655000|655021)/,
  },
  {
    name: 'American Express',
    logo: AmericanExpress,
    re: /^3[47]\d{13,14}$/,
  },
];
