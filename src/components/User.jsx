import React from "react";
import "../css/body.css";

const User = ({ index, data }) => {
  return (
    <>
      <div className="card" key={index}>
        <div className="card__body">
          <div className="picture">
            <img src={data.picture.large} alt="" />
          </div>
          <p className="card__nat">{data.nat}</p>
          <div className="card__details">
            <h3 className="card__title">
              {data.name.title +
                ". " +
                data.name.first +
                " " +
                data.name.last +
                " | " +
                data.dob.age}
            </h3>
            <h4 className="card__email">{data.email}</h4>
            <p className="card__text">
              {data.location.street.number +
                data.location.street.name +
                "," +
                data.location.city +
                "," +
                data.location.state +
                "," +
                data.location.country +
                "," +
                data.location.postcode}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
