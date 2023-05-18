import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/exo-2';
import '@fontsource/roboto';

// Render the root component of the application
ReactDOM.render(
  <React.StrictMode>
    {/* Use BrowserRouter for routing */}
    <Router>
      {/* Render the main App component */}
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
