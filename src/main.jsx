import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Components/AddCoffee.jsx';
import UpdatePage from './Components/UpdatePage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path:'/addCoffee',
    element:<AddCoffee/>
  },
  {
    path:'/update',
    element:<UpdatePage/>
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
