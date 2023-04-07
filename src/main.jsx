import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './components/Layout/Main'
import Home from './components/Home/Home'
import About from './components/About/About'
import Tshirts from './components/Tshirts/Tshirts'
import Contact from './components/Contact/Contact'


const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path: 'about',
        element : <About></About>
      },
      {
        path: 'tshirts',
        element: <Tshirts></Tshirts>,
        loader : () => fetch('tshirts.json')

      },
      {
        path : 'contact',
        element : <Contact></Contact>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}></RouterProvider>
  </React.StrictMode>,
)
