import { AppColors, BaseColor } from '../types';

const Dark: AppColors = {
  outline: '#FFFFFF',
  background: '#000000',
  dailyChip: {
    [BaseColor.red]: {
      borderSelected: '#a03432',
      fillSelected: '#fa5d55',
    },
    [BaseColor.orange]: {
      borderSelected: '#a15a32',
      fillSelected: '#fa9c55',
    },
    [BaseColor.yellow]: {
      borderSelected: '#96a032',
      fillSelected: '#faf455',
    },
    [BaseColor.green]: {
      borderSelected: '#32a032',
      fillSelected: '#79fa55',
    },
    [BaseColor.blue]: {
      borderSelected: '#325aa0',
      fillSelected: '#5596fa',
    },
    [BaseColor.purple]: {
      borderSelected: '#6e32a0',
      fillSelected: '#9155fa',
    },
    [BaseColor.pink]: {
      borderSelected: '#a03291',
      fillSelected: '#fa55e7',
    },
    [BaseColor.brown]: {
      borderSelected: '',
      fillSelected: '',
    },
    [BaseColor.gray]: {
      borderSelected: '',
      fillSelected: '',
    },
    [BaseColor.lightBlue]: {
      borderSelected: '',
      fillSelected: '',
    },
    [BaseColor.magenta]: {
      borderSelected: '',
      fillSelected: '',
    },
    [BaseColor.lime]: {
      borderSelected: '',
      fillSelected: '',
    },
  },
};

export default Dark;
