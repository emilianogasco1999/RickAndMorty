import React from 'react'

const Alert = ({color, texto}) => {
  return (
    <div className={`alert alert-${color} form-control`} role="alert">
      {texto}
    </div>
  )
}

export default Alert