import React from "react";

const Message = ({text, type}) => {
  return (
    <div style={{width: '500px', margin: '1rem auto 0 auto'}}>
      <div className={`alert alert-${type || 'warning'}`} style={{textAlign: 'center', fontSize: '20px'}} role="alert">
        {text}
      </div>
    </div>
  )
}

export default Message