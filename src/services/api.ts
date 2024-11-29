const UNITS = [
  { id: 1, text: "Units" },
  { id: 2, text: "Hours" },
];

export type Units = typeof UNITS;

export const getUnits = () => {
  return new Promise<Units>((resolve) => {
    setTimeout(() => resolve(UNITS), 500);
  });
};

export const postUnit = (unit: string) => {
  return new Promise<Units>((resolve) => {
    setTimeout(() => {
      UNITS.push({ id: UNITS.length + 1, text: unit });
      resolve(UNITS);
    }, 500);
  });
};
