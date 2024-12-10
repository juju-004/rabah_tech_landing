import React from "react";

function Container({ children, className }) {
  return (
    <div className={`max-w-[1200px] contain w-full mx-auto ${className}`}>
      {children}
    </div>
  );
}

export default Container;
