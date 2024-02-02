import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@aws-amplify/ui-react/styles/reset.layer.css' // global CSS reset
import '@aws-amplify/ui-react/styles/base.layer.css' // base styling needed for Amplify UI
import '@aws-amplify/ui-react/styles/button.layer.css' // component specific styles
import { ThemeProvider } from '@aws-amplify/ui-react';
import { defaultTheme } from './themes';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <ThemeProvider theme={defaultTheme} >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
