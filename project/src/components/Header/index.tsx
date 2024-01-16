import React, { useEffect, useRef } from 'react';
import { Navbar } from '../Navbar';
import {  TELEGRAM_CHANNEL_LINK } from '../../common/contants';
import './index.css';

export const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.document.onscroll = event => {

      if (!headerRef.current) return;

      const el = headerRef.current;

      if (window.pageYOffset > 0) {

        if (!el.classList.contains('static'))
          el.classList.add('static');
      } else el.classList.remove('static');
    }
  })
  
  return (
    <>
      <div className="app__header_status_bar">
        <p>
          <span role='img' aria-label='' aria-labelledby=''>🔥</span> Join our telegram channel and keep up with the latest news.
          <a href={TELEGRAM_CHANNEL_LINK}>Join the waitlist</a>
        </p>
      </div>

      <header
        ref={headerRef}
      >

        <Navbar />

      </header>
    </>
  )
}