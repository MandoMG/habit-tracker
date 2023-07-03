import React, {useContext, useState} from 'react';
import { Pressable, View } from 'react-native';
import { ChipColor } from '../../types';
import {ThemeContext} from "../../themes/ThemeProvider";

const dimensions = 60;

interface DailyChipProps {
  chipColor?: ChipColor;
}
const DailyChip = ({ chipColor }: DailyChipProps) => {
  const [isComplete, setIsComplete] = useState(false);
  const { colors } = useContext(ThemeContext) || {};

  return (
    <View>
      <Pressable
        onPress={() => setIsComplete((prevState) => !prevState)}
        style={{
          backgroundColor: isComplete ? chipColor?.fillSelected : colors?.background,
          margin: 8,
          width: dimensions,
          height: dimensions,
          borderRadius: 40,
          borderWidth: 2,
          borderColor: isComplete ? chipColor?.borderSelected : colors?.outline,
        }}
      />
    </View>
  );
};

export default DailyChip;
