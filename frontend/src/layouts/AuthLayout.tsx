import React, { ReactNode } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <Box>{children}</Box>
  );
}
