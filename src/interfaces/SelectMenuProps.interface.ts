interface SelectMenuProps {
  className: string;
  choices: string[];
  indexFilterOption: number;
  setIndexFilterOption: (index: number) => void;
  background?: string;
  textColor?: string;
}

export { type SelectMenuProps };
