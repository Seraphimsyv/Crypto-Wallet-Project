import React, { useState, useEffect } from 'react';
import './index.css';

export const SuccessPage = () => {
  const [email, setEmail] = useState<string>('');

  useEffect(() => {

    if (!email) {

      const emailCache = window.localStorage.getItem('lead-email');

      if (emailCache)
        setEmail(emailCache);
      else
        window.location.href = '/';
    }
  }, [email])

  return (
    <>
      <div id="app__page_success">

        <div id="app__success_block">

          {/* Image */}
          <div id="app__success_block_logo">
            <img src="/assets/icons/system/success-mail.png" alt="SUCCESS-MAIL" />
          </div>
          
          {/* Title */}
          <h1>The trading bot has been successfully connected!</h1>

          {/* Subtitle */}
          <h3>Wait for an e-mail message to «<a href={`mailto:${email}`}>{email}</a>»</h3>

          {/* Button */}
          <button onClick={() => window.location.href = '/'}>Home Page</button>

        </div>

      </div>
    </>
  )
}