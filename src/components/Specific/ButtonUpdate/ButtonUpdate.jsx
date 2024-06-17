import React from 'react'

const ButtonUpdate = ({handleUpdateClick}) => {
  return (
    <div className='mb-3 '>
      <div className="btn btn-secondary"
      onClick={handleUpdateClick}
      >Actualizar <i className="bi bi-arrow-clockwise"></i></div>
    </div>
  )
}

export default ButtonUpdate