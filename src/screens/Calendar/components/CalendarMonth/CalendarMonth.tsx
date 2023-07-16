import React, { useContext } from 'react';
import { FlatList, Text, View } from 'react-native';
import DailyChip from '../../../../components/Chip/DailyChip';
import { BaseColor } from '../../../../types';
import { ThemeContext } from '../../../../themes/ThemeProvider';

interface CalendarMonthProps {
  monthTitle: string;
  numDays: number;
  color: BaseColor;
}

const CalendarMonth = ({ color, monthTitle, numDays }: CalendarMonthProps) => {
  const { colors } = useContext(ThemeContext) || {};
  const chipColor = colors?.dailyChip[color];

  return (
    <View style={{ marginHorizontal: 8}}>
      <Text style={{ color: colors?.outline, marginHorizontal: 8, fontSize: 24, fontWeight: '700' }}>{monthTitle}</Text>
      <FlatList
        scrollEnabled={false}
        data={new Array(numDays)}
        numColumns={5}
        renderItem={() => <DailyChip chipColor={chipColor} />}
      />
    </View>
  );
};

export default CalendarMonth;
