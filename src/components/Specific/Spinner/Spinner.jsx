import React from 'react'

const Spinner = ({display}) => {
  if(display){
    return(
    <div className="d-flex justify-content-center my-4" >
    <div className="spinner-grow text-secondary " role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>)
  }else{}
  
}

export default Spinner