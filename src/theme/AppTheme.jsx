import { CssBaseline } from '@mui/material';
import { ThemeProvider } from "@emotion/react";

import { mainTheme } from './mainTheme';

function AppTheme({ children }) {
  return(
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default AppTheme;
