import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { store , persistor } from './store/Store.js'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import { NextUIProvider } from '@nextui-org/react'
import FlightInfoPage from './components/Flights/FlightInfoPage'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

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
      },
      {
        path:"/flight-info/:id",
        element:<FlightInfoPage/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate  loading={null} persistor={persistor}>
      <NextUIProvider>
       <RouterProvider router={router}/>
      </NextUIProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
