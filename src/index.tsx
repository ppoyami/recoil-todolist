import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '@app';

ReactDOM.render(
  <Router>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </Router>,
  document.getElementById('root'),
);
