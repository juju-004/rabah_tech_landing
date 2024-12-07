import React, { useEffect, useState } from "react";

function Image({ loading = <></>, alt = "An image", src, className }) {
  const [loaded, setloaded] = useState(false);

  // useEffect(() => {
  //   setloaded(true);
  // }, []);

  return (
    <>{loaded ? <img src={src} alt={alt} className={className} /> : loading}</>
  );
}

export default Image;
