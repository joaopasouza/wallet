import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';

import { theme } from './styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
