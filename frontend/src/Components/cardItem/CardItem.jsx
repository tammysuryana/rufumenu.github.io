import React from 'react'

const CardItem = (props) => {

  console.log(props.photo.url);
  

  return (
    <div className="col-lg-3 ab-content">
        <div className="ab-content-inner">
            <img src={`https://rufumenu.herokuapp.com${props.photo.url}` || "images/2.jpg"} alt="news image" className="img-fluid"/>
            <div className="ab-info-con">
                <h4>{props.name}</h4>
                <p>Rp.{props.price}</p>
            </div>
        </div>
    </div>
  )
}

export default CardItem
