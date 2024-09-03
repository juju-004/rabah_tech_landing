import React from "react";

function Header({ item, spanItem, br }) {
  return (
    <h2 className="heading">
      {item} {br ? <br /> : <></>} <span>{spanItem}</span>
    </h2>
  );
}

export default Header;
