import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import { NextUIProvider } from '@nextui-org/react'
import UserContextProvider from './context/UserContextProvider.jsx'

const router = createBrowserRouter([
  {
    path:'',
    element:<Layout/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/signup",
        element:<Signup/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <NextUIProvider>
       <RouterProvider router={router}/>
      </NextUIProvider>
    </UserContextProvider>
  </React.StrictMode>,
)
