import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Components/AddCoffee.jsx';
import UpdatePage from './Components/UpdatePage.jsx';
import SignUp from './Components/SignUp.jsx';
import SignIn from './Components/SignIn.jsx';
import MainRoute from './Components/MainRoute.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element:<MainRoute/>,
    errorElement:
    <div className='flex flex-col justify-center items-center space-y-4 h-[100vh]'>
      <h2 className='text-5xl '>404!</h2>
      <p className='text-xl'>Page Not Found</p>
      <Link to='/'><button className="btn btn-sm btn-glass">Home</button></Link>
    </div>,
    children:[
      {
        path: "/",
        element:<App/>,
        loader:()=>fetch('http://localhost:5000/coffee')
      },
      {
        path:'/addCoffee',
        element:<AddCoffee/>
      },
      {
        path:'/update/:id',
        element:<UpdatePage/>,
        loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
      },{
        path:'/signUp',
        element:<SignUp/>
      },
       {
        path:'/signIn',
        element:<SignIn/>
       }
    ]
  },
  
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
    </AuthProvider> 
  </React.StrictMode>,
)
