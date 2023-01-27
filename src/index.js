import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {
  createHashRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Connect from './components/Connect';
import Events from './components/Events';
import CollapsibleExample from './components/CollapsibleExample';

const router = createHashRouter([
  {
    path: "/",
    element: <CollapsibleExample />,
    children: [
      { index: true, element: <App />},
      {
        path: "about", 
        element: <About />
      },
      {
        path: "events", 
        element: <Events />
      },
      {
        path: "connect", 
        element: <Connect />
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);