import { Link } from "react-router-dom";
// import { useState } from "react";

const NavBar = () => {
  const items = ["Home", "Cat", "RPS", "Calculator"];

  return (
    <div className="nav-block">
      <ul className="top-heading">
        {items.map((el) => {
          if ({ el } === "Home") {
            return (
              <li className="eachEll">
                <Link to="/" className="NavBar-item">
                  {el}
                </Link>
              </li>
            );
          } else {
            return (
              <li className="eachEll">
                {
                  <Link to={el} className="NavBar-item">
                    {el}
                  </Link>
                }
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default NavBar;
