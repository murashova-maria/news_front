import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './store';
import { TextEditorProvider } from './utils/context';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <TextEditorProvider>
      <App />
      </TextEditorProvider>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);
