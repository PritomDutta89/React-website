import React, { useState, useEffect } from "react";
import "../css/body.css";
import NoData from "./NoData.jsx";
import Home from "./Home.jsx";
import User from "./User.jsx";

const Body = (props) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://randomuser.me/api/?results=15")
      .then((res) => {
        return res.json();
      })
      .then(
        (data) => {
          let result = data.results;
          console.log(result);
          setUser(result);
          setLoading(false);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  if (loading) {
    return <Home />;
  }

  const filteredUser = user.filter((value) => {
    let x = value.name.first + " " + value.name.last;

    if (
      !props.searching ||
      x.toLowerCase().includes(props.searching.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <>
      <div className="main">
        {!filteredUser.length ? (
          <h1>
            <NoData />
          </h1>
        ) : (
          filteredUser.map((data, index) => <User index={index} data={data} />)
        )}
      </div>
    </>
  );
};

export default Body;
