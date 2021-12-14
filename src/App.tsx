import { Switch, Route } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';

import GlobalStyles from '@styles/global';
import theme from '@styles/theme';
import Home from '@pages/Home';

export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme['dark']}>
        <Global styles={GlobalStyles(theme['dark'])} />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </ThemeProvider>
    </div>
  );
}
