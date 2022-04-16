import React from 'react';
import  ReactDOM  from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';


ReactDOM.render(
  <SpeechProvider  appId='ab23e6ab-65c6-4c4f-8948-4ac511fb88d0' language='en-IN'>
    <Provider>
      <App/>
    </Provider>,
    </SpeechProvider>,
document.getElementById('root')
);