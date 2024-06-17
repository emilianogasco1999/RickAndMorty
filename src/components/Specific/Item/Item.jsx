import React from 'react'
import HorizontalCard from '../HorizontalCard/HorizontalCard'

const Item = ({ name, species, img, status, location, origin, id }) => {
  return (
    <>

      <div className="col-12  col-md-6 col-xl-4">
        <HorizontalCard name={name} species={species} img={img} status={status} location={location} origin={origin} id={id} />
      </div>
    </>
  )
}

export default Item