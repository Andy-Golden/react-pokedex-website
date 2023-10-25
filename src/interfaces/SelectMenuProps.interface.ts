interface SelectMenuProps {
  className: string;
  choices: string[];
  indexFilterOption: number;
  setIndexFilterOption: (index: number) => void;
}

export type { SelectMenuProps };
