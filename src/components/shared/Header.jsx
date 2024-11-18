import React from "react";

function Header({ item, spanItem, br }) {
  return (
    <h2 className="text-slate-400 text-[30px] sm:text-[60px] heading">
      {item} {br ? <br /> : <></>}{" "}
      <span className="text-blue-600">{spanItem}</span>
    </h2>
  );
}

export default Header;
