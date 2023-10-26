const generateStringPokeId = (id: number): string => {
  return `${"0".repeat(4 - id.toString().length)}${id}`;
};

export { generateStringPokeId };
