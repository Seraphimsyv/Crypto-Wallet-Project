import React from 'react';
import { CRYPTO_NAME } from '../../common/contants';
import './index.css';

export const Logotype = () => {
  return (
    <>
      <div id="logotype" onClick={() => window.location.href = '/'}>
        <img src={'./assets/images/system/logotype.png'} alt="LOGOTYPE" />
        <h2>{CRYPTO_NAME}</h2>
      </div>
    </>
  )
}