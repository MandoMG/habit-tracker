import React, { useMemo } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { getMonthDays, MonthKeys } from '../Calendar/util/CalendarMapper';

const MonthList = () => {
  const { t } = useTranslation();
  const months = t('global:months', { returnObjects: true });
  const monthArray = useMemo(() => {
    return Object.entries(months);
  }, [months]);

  return (
    <SafeAreaView>
      <ScrollView>
        {monthArray.map((monthEntry, index) => {
          const monthKey = monthEntry[0] as MonthKeys;
          const monthValue = monthEntry[1];

          return (
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 16,
                paddingVertical: 12,
                borderTopColor: 'black',
                borderTopWidth: 1,
                borderBottomColor: 'black',
                borderBottomWidth: index + 1 === monthArray.length ? 1 : 0,
              }}
            >
              <Text style={{ flex: 1, textAlign: 'left', fontSize: 18, fontWeight: '700' }}>
                {`${monthValue} 2023`}
              </Text>
              <Text style={{ flex: 1, textAlign: 'right', fontSize: 18, fontWeight: '700' }}>{`27 / ${getMonthDays(
                monthKey
              )}`}</Text>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MonthList;
