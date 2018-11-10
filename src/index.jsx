// @flow
import React from 'react';
import { render } from 'react-dom';
import 'reset.css';
import 'normalize.css';

import './style.styl';

import { App } from './components/App';

const container = document.getElementById('app');

if (container) {
  render(<App />, container);
}

console.log('it Works');
