import React from 'react'
import './Work.scss'

const WorkCard = (props) => {
  return (
    <div
      className="card card-wrapper pt-2"
      style={{ width: '18rem', height: '300px' }}
    >
      <div className="img-div">
        <img className="card-img d-block" src={props.imgUrl} alt="card pix" />
      </div>

      <div className="card-body">
        <h5 className="card-title text-start">{props.title}</h5>
        <hr />
        <p className="card-text text-start">{props.text}</p>
      </div>
    </div>
  )
}

export default WorkCard
