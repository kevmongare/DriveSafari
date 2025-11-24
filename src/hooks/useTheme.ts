// hooks/useTheme.ts
import { useMemo } from 'react';

export const useTheme = () => {
  const themeStyles = useMemo(() => ({
    primary: '#d39b53',
    primaryLight: '#e8b86c',
    primaryDark: '#b8863b',
    primary50: '#fdf8f3',
    primary100: '#f9f0e6',
    primary200: '#f2e0c9',
    primary300: '#e8c99c',
    
    // Gradient functions
    gradientPrimary: 'linear-gradient(135deg, #d39b53, #e8b86c)',
    gradientPrimaryToDark: 'linear-gradient(135deg, #d39b53, #b8863b)',
    
    // Shadow with primary color
    shadowPrimary: '0 4px 14px 0 rgba(211, 155, 83, 0.2)',
    
    // Ring/focus styles
    ringPrimary: '0 0 0 3px rgba(211, 155, 83, 0.1)',
  }), []);

  return themeStyles;
};