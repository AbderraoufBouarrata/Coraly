import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    typography: {
      fontFamily: [
        'Inter',
        'sans-serif',
      ].join(','),
    },
  });

export default function ThemeContextProvider({ children }) {

  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}
