import { Carrier } from '../types/carrier.types';
import SULogo from '@/shared/assets/SU.svg';
import BALogo from '@/shared/assets/BA.svg';
import S7Logo from '@/shared/assets/S7.svg';
import TKLogo from '@/shared/assets/TK.svg';

export const getCarrierLogo = (carrier: Carrier) => {
  switch (carrier) {
    case Carrier.BA:
      return BALogo;
    case Carrier.SU:
      return SULogo;
    case Carrier.S7:
      return S7Logo;
    case Carrier.TK:
      return TKLogo;
    default:
      return '';
  }
};
