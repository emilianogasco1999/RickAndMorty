import React from 'react'

const Headboard = ({ titulo, subtitulo,background,textColor,link }) => {
  return (
    <>
      <div className={`row bg-${background} py-5 m-0`}>
        <div className={`mx-auto text-center text-${textColor} aos-init aos-animate`} data-aos="fade-up">
          {/* <span className="subheading mb-2">Features</span> */}
          <h1 className="display-5 mb-3">{titulo} </h1>
          <p>{subtitulo} <a href={link}>{link}</a></p>
        </div>
      </div>
    </>
  )
}

export default Headboard