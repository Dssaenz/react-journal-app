import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from '@mui/material';

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
