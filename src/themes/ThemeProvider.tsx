import React, { createContext, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import Light from './Light';
import Dark from './Dark';
import { AppColors } from '../types';

type Theme = 'dark' | 'light' | string | null;

interface ThemeContext {
  theme?: Theme;
  colors?: AppColors;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContext | null>(null);

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const colorScheme = useColorScheme();
  const Colors = colorScheme === 'dark' ? Dark : Light;

  return <ThemeContext.Provider value={{ theme: colorScheme, colors: Colors }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
