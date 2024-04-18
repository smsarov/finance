'use client';
import React from "react";

import { useWindowResize } from "../../hooks/useWindowResize";

function page() {

  useWindowResize(() => {});
  console.log(123);
  
  return (
    <div>options</div>
  )
}

export default page