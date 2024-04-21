import { FC } from 'react';
import Image from 'next/image';
import { Carrier } from '@/shared/types';
import { getCarrierLogo } from '@/shared/utils';

interface Props {
  carrier: Carrier;
}

const CarrierLogo: FC<Props> = ({ carrier }) => {
  return (
    <Image
      width={120}
      height={40}
      src={getCarrierLogo(carrier)}
      alt={`${carrier} logo`}
    />
  );
};
export default CarrierLogo;
