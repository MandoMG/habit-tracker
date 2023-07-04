import { BaseColor } from '../../../types';

export enum MonthKeys {
  January = 'january',
  February = 'february',
  March = 'march',
  April = 'april',
  May = 'may',
  June = 'june',
  July = 'july',
  August = 'august',
  September = 'september',
  October = 'october',
  November = 'november',
  December = 'december',
}

export const getMonthDays = (month: MonthKeys): number => {
  switch (month) {
    case MonthKeys.January:
    case MonthKeys.March:
    case MonthKeys.May:
    case MonthKeys.July:
    case MonthKeys.August:
    case MonthKeys.October:
    case MonthKeys.December:
      return 31;
    case MonthKeys.April:
    case MonthKeys.June:
    case MonthKeys.September:
    case MonthKeys.November:
      return 30;
    case MonthKeys.February:
      return 28;
    default:
      return 0;
  }
};
export const getMonthColor = (month: MonthKeys): BaseColor => {
  switch (month) {
    case MonthKeys.January:
      return BaseColor.red;
    case MonthKeys.February:
      return BaseColor.orange;
    case MonthKeys.March:
      return BaseColor.yellow;
    case MonthKeys.April:
      return BaseColor.green;
    case MonthKeys.May:
      return BaseColor.lime;
    case MonthKeys.June:
      return BaseColor.pink;
    case MonthKeys.July:
      return BaseColor.magenta;
    case MonthKeys.August:
      return BaseColor.purple;
    case MonthKeys.September:
      return BaseColor.gray;
    case MonthKeys.October:
      return BaseColor.brown;
    case MonthKeys.November:
      return BaseColor.blue;
    case MonthKeys.December:
      return BaseColor.lightBlue;
    default:
      return BaseColor.gray;
  }
};
