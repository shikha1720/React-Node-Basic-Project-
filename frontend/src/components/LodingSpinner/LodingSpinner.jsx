import React from 'react';
import "./LodingSpinner.css";

function LodingSpinner() {
  return (
    <div className='d-flex justify-content-center spinner'>
      <div className='spinner-border' role='status' style={{width:"5rem", height:"5rem"}}>
        <span className='visually-hidden'>Loding...</span>
      </div>
    </div>
  )
}

export default LodingSpinner
