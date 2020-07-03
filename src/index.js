import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import './style/index.css'
import './style/font.css'
import './style/tailwind.patch.css'
import './util/icons/iconfont.css'
import 'normalize.css'


ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);
