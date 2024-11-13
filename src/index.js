import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
   createBrowserRouter,
   createRoutesFromElement,
   Route,
   RouterProvider
  } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './HomeScreen';

const routes = createRoutesFromElement(
  createRoutesFromElement(
    <Route path="/" element={<App />}>
    <Route index={true} path="/" element={<HomeScreen />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
