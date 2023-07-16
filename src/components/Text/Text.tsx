import React, { ReactNode, useContext, useMemo } from 'react';
import { StyleProp, StyleSheet, Text as RNText, TextStyle, TextProps as RNTextProps } from 'react-native';
import { ThemeContext } from '../../themes/ThemeProvider';

export enum TextTypes {
  Title = 'title',
  Subtitle = 'subtitle',
  Label = 'label',
}

interface TextProps extends RNTextProps {
  children: ReactNode;
  styles?: StyleProp<TextStyle>;
  type?: TextTypes;
  textColor?: string;
}

const textStyles = StyleSheet.create({
  title: {
    marginHorizontal: 8,
    fontSize: 24,
    fontWeight: '700',
  },
  subtitle: {
    marginHorizontal: 8,
    fontSize: 16,
    fontWeight: '700',
  },
  label: {
    marginHorizontal: 8,
    fontSize: 16,
    fontWeight: '400',
  },
});

const getTextStyle = (textType?: TextTypes) => {
  switch (textType) {
    case TextTypes.Title:
      return textStyles.title;
    case TextTypes.Subtitle:
      return textStyles.subtitle;
    case TextTypes.Label:
      return textStyles.label;
    default:
      return {};
  }
};

const Text = ({ children, styles, type, textColor }: TextProps) => {
  const { colors } = useContext(ThemeContext) || {};
  const textStyle = useMemo(() => getTextStyle(type), [type]);

  return <RNText style={[textStyle, styles, { color: textColor ?? colors?.outline }]}>{children}</RNText>;
};

export default Text;
