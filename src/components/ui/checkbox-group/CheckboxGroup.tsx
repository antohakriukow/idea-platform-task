import { Checkbox } from '@/components';
import { getStopsCountText } from '@/shared/utils';

export interface Props<T> {
  options: T[];
  currentOptions: T[];
  setOptions: (option: T[]) => void;
}

const CheckboxGroup = <T extends string | number>(
  props: Props<T>,
): JSX.Element => {
  const { options, currentOptions, setOptions } = props;
  const isAllOptionsChecked = options.length === currentOptions.length;

  const handleSetOption = (option: T) =>
    currentOptions.includes(option)
      ? setOptions(currentOptions.filter((op) => op !== option))
      : setOptions([...currentOptions, option]);

  const handleCheckAll = () =>
    isAllOptionsChecked ? setOptions([]) : setOptions(options);

  return (
    <div>
      <Checkbox
        key='all'
        isChecked={isAllOptionsChecked}
        onClick={handleCheckAll}
        title='Все'
      />

      {!!options.length &&
        options?.map((option) => {
          const isChecked = currentOptions.includes(option);
          const handleClick = () => handleSetOption(option);
          const handleSetOnlyThisOption = () => setOptions([option]);

          return (
            <Checkbox
              key={option}
              isChecked={isChecked}
              onClick={handleClick}
              title={getStopsCountText(+option)}
              onOptionalClickTitle='только'
              onOptionalClick={handleSetOnlyThisOption}
            />
          );
        })}
    </div>
  );
};
export default CheckboxGroup;
