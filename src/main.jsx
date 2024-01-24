import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Componentes/Root/Root.jsx';
import Home from './Componentes/Home/Home.jsx';
import Donations from './Componentes/Donations/Donations.jsx';
import Statistics from './Componentes/Statistics/Statistics.jsx';
import ErrorePage from './Componentes/ErrorePage/ErrorePage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorePage></ErrorePage>,
    children: [
      {path: "/",
      element: <Home></Home>,
      },
      {
        path: "/donation",
        element: <Donations></Donations>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      }


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
