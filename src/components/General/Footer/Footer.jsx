import React from 'react'
import ButtonNav from '../../Specific/ButtonNav/ButtonNav'

const Footer = () => {
  return (
    <div className="container py-3">
      <footer>
        <ul className="nav justify-content-center border-bottom  mb-3 ">
          <ButtonNav texto={'Home'} style={'text-muted'} />
          <ButtonNav texto={'Characters'} style={'text-muted'}/>
        </ul>
        <p className="text-center text-muted">© 2023, <a href="https://github.com/emilianogasco" className='text-decoration-none text-muted'>Emiliano Gasco</a></p>
      </footer>
    </div>
  )
}

export default Footer