import React, { ReactNode } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
  },
});

interface Props {
  children: ReactNode;
}

export default function ThemeContextProvider({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
