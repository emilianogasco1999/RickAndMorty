import React from 'react'
import Home from './pages/Home/Home'
import Characters from './pages/Characters/Characters'
import Character from './pages/Character/Character'
import Navbar from './components/General/Navbar/Navbar'
import Footer from './components/General/Footer/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>

          </Route>
          <Route path="Characters" element={<Characters />} />
          <Route path="Character/:id" element={<Character/>} />
          <Route path="*" element={'error'} />
        </Routes>
        <Footer/>
      </BrowserRouter>

      {/* <Home /> */}
      {/* <Character /> */}
    </>
  )
}

export default App