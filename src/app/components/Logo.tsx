import React from "react";

function Logo({className} : {className? : string}) {
  return (
    <h1 className={"pinkish-gradient-text text-center font-bold " + (className || '')}>
      Stocksy
    </h1>
  );
}

export default Logo;
