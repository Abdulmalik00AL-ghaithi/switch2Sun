import { useState } from 'react'
import NavBar from "./componets/navBar"
import Footer from "./componets/footer"
import Home from "./componets/home"
import Services from './componets/services'
import ContactUS from "./componets/contact"
import Products from './componets/products'
import AboutUs from './componets/aboutUs'
import {createBrowserRouter ,  RouterProvider} from "react-router-dom" 
import './App.css'

function App() {
  const routers = createBrowserRouter([
    {
      path:'/',
      element:<Home />
    },
    {
      path:'/services',
      element:<Services />
    },
    {
      path:'/products',
      element:<Products />
    },
    {
      path:'/aboutus',
      element:<AboutUs />
    },
    {
      path:'contact',
      element:<ContactUS />
    }
  ])
  return (
    <>
      <RouterProvider router={routers} />
      <Footer />
    </>
  )
}

export default App
