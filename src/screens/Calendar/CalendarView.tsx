import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import CalendarMonth from '../../components/CalendarMonth/CalendarMonth';
import { useTranslation } from 'react-i18next';
import { getMonthColor, getMonthDays, MonthKeys } from './util/CalendarMapper';

const CalendarView = () => {
  const { t } = useTranslation();
  const months = t('global:months', { returnObjects: true });

  return (
    <SafeAreaView>
      <ScrollView>
        {Object.entries(months).map((monthEntry, index) => {
          const monthKey = monthEntry[0] as MonthKeys;
          const monthValue = monthEntry[1];

          return (
            <CalendarMonth
              key={`${monthKey}-${index}`}
              monthTitle={monthValue}
              numDays={getMonthDays(monthKey)}
              color={getMonthColor(monthKey)}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CalendarView;
