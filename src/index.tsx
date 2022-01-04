import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { DAppProvider, Config, Localhost } from '@usedapp/core'
import App from './App';
import theme from './theme';

const config: Config = {
  readOnlyChainId: 1337,
  networks: [Localhost],
  multicallAddresses: {
    //1337: "Your_Own_Multicall_Address",
  }
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <DAppProvider config={config}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <App />
    </DAppProvider>
  </ThemeProvider>,
  document.querySelector('#root'),
);
