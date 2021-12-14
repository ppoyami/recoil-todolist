import { Switch, Route } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';

import GlobalStyles from '@styles/global';
import theme from '@styles/theme';
import Home from '@pages/Home';
import styled from '@emotion/styled';

export default function App() {
  return (
    <Layout>
      <ThemeProvider theme={theme['dark']}>
        <Global styles={GlobalStyles(theme['dark'])} />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </ThemeProvider>
    </Layout>
  );
}

const Layout = styled.div({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
