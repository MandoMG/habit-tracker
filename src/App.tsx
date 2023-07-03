import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

const title = 'Habit Tracker';

const App = () => {
  const { t } = useTranslation();

  return (
    <SafeAreaView>
      <View>
        <Text>{t('global:appTitle')}</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
