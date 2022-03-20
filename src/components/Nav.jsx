import React, { useState } from "react";
import "../css/App.css";
import Body from "./Body";

const Nav = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="Navbar">
        <img
          src="https://th.bing.com/th/id/OIP.LpDrkHxE25QIzQbSF-flFAHaHa?pid=ImgDet&rs=1"
          alt=""
        />

        <div className="Navbar__input">
          <form>
            <input
              type="text"
              placeholder="search user..."
              onChange={(e) => {
                e.preventDefault();
                setSearch(e.target.value);
              }}
            />
          </form>
        </div>
      </div>

      <div>
        <Body searching={search} />
      </div>
    </>
  );
};

export default Nav;
