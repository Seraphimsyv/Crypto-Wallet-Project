import { useEffect, useRef } from 'react';
import { Navbar } from '../Navbar';
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
          🔥 Comming Soon: Portfolio tracking by Finance.
          <a href='/'>Join the waitlist</a>
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