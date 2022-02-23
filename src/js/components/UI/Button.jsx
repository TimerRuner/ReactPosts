import React from "react";

const Buttom = ({children, ...props}) => {
  return(
    <button {...props}>
      {children}
    </button>
  )
}

export default Buttom;