import React from "react";

function Header({ children, className, style }) {
  return (
    <div className={`fx ${className} mb-3 ${!style ? "md:!mb-20" : ""}`}>
      <span
        className={`md:text-5xl text-4xl relative max-w-[70%] text-center before:text-white text-c1 font-bold before:absolute before:left-full after:absolute after:top-1/2 after:-translate-y-1/2 before:top-1/2 before:-translate-y-1/2 after:right-full after:text-white rbh before:content-['/>'] after:content-['<'] font-[genty] `}
      >
        {children}
      </span>
    </div>
  );
}

export default Header;
