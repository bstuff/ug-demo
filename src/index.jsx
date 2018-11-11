// @flow
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import 'reset.css';
import 'normalize.css';

import './style.styl';

import { App } from './components/App';

const container = document.getElementById('app');

if (container) {
  render((
    <React.StrictMode>
      <React.Suspense fallback={<div>Loading....</div>}>
        <App />
      </React.Suspense>
    </React.StrictMode>
  ), container);
  // render(<App />, container);
  // ReactDOM.createRoot(container).render(<App />);
}

console.log('it Works');
