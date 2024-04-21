import { FC } from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { CheckboxGroup, Text } from '@/components';

interface Props {
  options: number[];
  stops: number[];
  setStopsCount: ActionCreatorWithPayload<number[], 'filters/setStopsCount'>;
}

const StopsCountSetter: FC<Props> = ({ options, stops, setStopsCount }) => {
  return (
    <div>
      <Text
        text='количество пересадок'
        isUppercase
        isSemiBold
      />
      <CheckboxGroup<number>
        options={options}
        currentOptions={stops}
        setOptions={setStopsCount}
      />
    </div>
  );
};
export default StopsCountSetter;
