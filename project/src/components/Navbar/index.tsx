import React, { useState, useEffect } from 'react';
import { Logotype } from '../Logotype';
import { Button } from '../common/Button';
import { Link } from './link';
import './index.css';

export const Navbar = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);

  useEffect(() => {
    
    if (menuActive) {
      window.document.body.style.overflow = 'hidden';

      if (window.pageYOffset > 0) {
        const mobileHeader = window.document.getElementById('app__header_mobile_navbar') as HTMLDivElement;
        
        mobileHeader.style.paddingTop = '0px';
      } else {
        const mobileHeader = window.document.getElementById('app__header_mobile_navbar') as HTMLDivElement;
        
        mobileHeader.style.paddingTop = '39px';
      }
    } else {
      window.document.body.style.overflow = 'auto';
    }

    window.onresize = evt => {
      window.innerWidth >= 1024 && menuActive && setMenuActive(false)
    }

  }, [menuActive])

  return (
    <>
      <nav id="app__header_navbar" className={`container md ${menuActive ? 'active' : ''}`}>

        {/* Logotype */}
        <Logotype />

        {/* Desktop Navigations */}
        <div id="app__header_navbar_menu">
          <div style={
              {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                gap: '1em'
              }
            }
          >
            <Link value="Product" url='#app__home_save_your_money' />
            <Link value="Integrations" url='#app__home_platform_sliders' />
            <Link value="Learn" url='#app__home_knowledge_block' />
          </div>
        </div>

        {/* Desktop Authorization */}
        <div id="app__header_navbar_authorization">
          <Button
            color='info'
            variant='filled'
            size='sm'
            onClick={() => window.location.href = '/register'}
          >
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu Hamburger */}

        <div className={`app__header_navbar_menu_hamburger ${menuActive ? 'active' : ''}`}>
          <button onClick={() => setMenuActive(!menuActive)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        
      </nav>

      {menuActive && (
        <>
          <div id="app__header_mobile_header">
            <div id="app__header_mobile_navbar">

              <div id="app__header_mobile_navbar_list">
                <div
                  className='app__header_mobile_navbar_list_item'
                  onClick={() => {
                    window.location.href = '#app__home_save_your_money';
                    setMenuActive(false);
                  }}
                >
                  Product
                </div>
                <div
                  className='app__header_mobile_navbar_list_item'
                  onClick={() => {
                    window.location.href = '#app__home_platform_sliders';
                    setMenuActive(false);
                  }}
                >
                  Integrations
                </div>
                <div
                  className='app__header_mobile_navbar_list_item'
                  onClick={() => {
                    window.location.href = '#app__home_knowledge_block';
                    setMenuActive(false);
                  }}
                >
                  Learn
                </div>
              </div>

              <div id="app__header_mobile_navbar_authorizations">

                <span>
                  <Button
                    size='md'
                    color='info'
                    variant='filled'
                    onClick={() => window.location.href = '/register'}
                  >
                    Sign Up
                  </Button>
                </span>

              </div>

            </div>
          </div>
        </>
      )}
    </>
  )
}