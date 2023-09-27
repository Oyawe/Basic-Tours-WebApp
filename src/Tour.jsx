import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readmore, setReadmore] = useState(false);
  //   console.log(info.substring(0,100))
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readmore ? info : `${info.substring(0, 204)}...`}
          <button
            type="button"
            className="info-btn"
            onClick={() => setReadmore(!readmore)}
          >
            {readmore ? " show less" : "read more"}
          </button>
        </p>
        <button
          type="button"
          className="btn btn-block delete-btn"
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
