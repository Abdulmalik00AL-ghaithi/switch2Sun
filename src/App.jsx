import { useState } from 'react'
import NavBar from "./componets/navBar"
import Footer from "./componets/footer"
import Home from "./componets/home"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Home />
      <Footer />
    </>
  )
}

export default App
