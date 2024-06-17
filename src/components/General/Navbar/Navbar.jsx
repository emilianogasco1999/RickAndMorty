import React, { useState, useEffect } from 'react'
import ButtonNav from '../../Specific/ButtonNav/ButtonNav'
const Navbar = () => {
  const [theme, setTheme] = useState(()=>{
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      return "dark"
    }
    return "light"
  })
  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme == "light" ? "dark" : "light")
  }
  useEffect(() => {
    if (theme == 'dark') {
      document.querySelector('html').setAttribute('data-bs-theme', 'dark')
    } else {
      document.querySelector('html').setAttribute('data-bs-theme', '')
    }

  }, [theme])
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container ">

          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <ButtonNav texto={'Home'} />
              <ButtonNav texto={'Characters'} />
              {/* <ButtonNav texto={'Character'} /> */}
            </ul>
            {theme == "light" ? 
            <button className="btn btn-outline-dark btn-sm" onClick={handleChangeTheme}><i className="bi bi-moon-stars-fill"></i></button>
            :
            <button className="btn btn-outline-light btn-sm" onClick={handleChangeTheme}><i className="bi bi-sun-fill"></i></button>

            }
            

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar