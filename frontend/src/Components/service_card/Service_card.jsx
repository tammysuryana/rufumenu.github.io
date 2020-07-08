import React from 'react'

const Service_card = (props) => {
  return (
    <div class="col-lg-3 ab-content">
        <div class="ab-content-inner">
            <img src={`http://127.0.0.1:1337${props.image}`} alt="news image" class="img-fluid"/>
            <div class="ab-info-con">
                <h4>{props.name}</h4>
                <p>Rp.{props.price}</p>
            </div>
        </div>
    </div>
  )
}

export default Service_card
