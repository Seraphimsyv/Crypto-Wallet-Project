import React from 'react';
import './index.css';

export const Logotype = () => {
  return (
    <>
      <div id="logotype" onClick={() => window.location.href = '/'}>
        <img src={'/assets/images/system/logotype.png'} alt="LOGOTYPE" />
        <h2>Finance</h2>
      </div>
    </>
  )
}