export interface ChipColor {
  borderSelected: string;
  fillSelected: string;
}

export enum BaseColor {
  red = 'red',
  orange = 'orange',
  yellow = 'yellow',
  green = 'green',
  blue = 'blue',
  purple = 'purple',
  pink = 'pink',
  brown = 'brown',
  gray = 'gray',
  lightBlue = 'lightBlue',
  magenta = 'magenta',
  lime = 'lime',
}

type DailyChip = {
  [key in BaseColor]: ChipColor;
};

export interface AppColors {
  background: string;
  outline: string;
  dailyChip: DailyChip;
}
