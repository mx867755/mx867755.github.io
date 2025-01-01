import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header.jsx';
import AboutMe from './components/AboutMe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <body class="min-h-screen bg-slate-900 text-purple-50">
      <div class="max-w-4xl mx-auto pt-20 flex justify-between items-center">
        <div>
        <Header/>
        </div>
        <div>
          <AboutMe/>
        </div>
      </div>
    </body>
  </React.StrictMode>
);
