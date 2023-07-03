import { SafeAreaView, ScrollView, Text } from 'react-native';
import CalendarMonth from '../../components/CalendarMonth/CalendarMonth';
import { BaseColor } from '../../types';
import React, {useContext} from 'react';
import { useTranslation } from 'react-i18next';
import {ThemeContext} from "../../themes/ThemeProvider";

const CalendarView = () => {
  const { t } = useTranslation();
  const { colors } = useContext(ThemeContext) || {};

  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={{ color: colors?.outline}}>{t('global:appTitle')}</Text>
        <CalendarMonth monthTitle="January" numDays={31} color={BaseColor.red} />
        <CalendarMonth monthTitle="February" numDays={28} color={BaseColor.orange} />
        <CalendarMonth monthTitle="March" numDays={31} color={BaseColor.blue} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CalendarView;
