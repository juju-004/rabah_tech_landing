import React from "react";

function Container({ children, className }) {
  return (
    <div className={`max-w-[1200px] w-full mx-auto px-5 ${className}`}>
      {children}
    </div>
  );
}

export default Container;
