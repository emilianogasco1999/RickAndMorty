import React from 'react'
import { Link } from 'react-router-dom'


const HorizontalCard = ({ name, species, img, status, location, origin, id }) => {
  return (
    <div className="card mb-3" >
      <div className="row g-0">
        <div className="col-md-4">
          <img src={img} className="img-fluid rounded-start" alt={name} />
        </div>
        <div className="col-md-8 ">
          <div className="card-body text-start ">
            <Link to={`/Character/${id}`} className="card-title text-decoration-none h3">{name}</Link>
            <p className="card-text fw-bold"><i className={`bi bi-circle-fill text-${status}`}></i> {status} - {species}</p>
            <h5 className="card-subtitle mb-2 text-muted">Last known location:</h5>
            <h6 className="card-title mb-3">{location.name}</h6>
            <h5 className="card-subtitle mb-2 text-muted">First seen in:</h5>
            <h6 className="card-title ">{origin.name}</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HorizontalCard