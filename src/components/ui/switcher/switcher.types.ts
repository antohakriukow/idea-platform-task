interface Props {
  setCurrent: (option: string) => void;
}

export interface OptionProps extends Props {
  option: string;
  isCurrent: boolean;
}

export interface SwitcherProps extends Props {
  options: string[];
  current: string;
}
