import React from 'react';
import { Button } from "../../components/common/Button";
import { CRYPTO_NAME, VIDEO_LINK } from '../../common/contants';

export const MainBanner = () => {
  return (
    <>
      <div
        id="app__home_main_banner"
      >

        <div id="app__home_main_banner_content">

          <h1 id="app__home_main_banner_content_title">
            Trading Bot {CRYPTO_NAME}
          </h1>

          <p id="app__home_main_banner_content_subtitle">
            Your reliable partner in the world of lucrative deals
          </p>

          <ul id="app__home_main_banner_content_list">
            <li>
              <span />
              Fast, smart, profitable – it's designed for your success
            </li>
            <li>
              <span />
              Automation that turns every trade into a victory
            </li>
            <li>
              <span />
              Our trading bot is the key to your intelligent trading
            </li>
          </ul>

          <div id="app__home_main_banner_content_buttons">

            <Button
              color='info'
              variant='filled'
              onClick={() => window.location.href = '/register'}
            >
              Connect Trading Bot right now
            </Button>

          </div>

          {/* <div
            id="app__home_main_banner_content_link_watch"
            onClick={() => window.location.href = VIDEO_LINK}
          >
            
            <div id="app__home_main_banner_content_link_icon">
              <img src="./assets/icons/system/video-camera-icon.png" alt="ICON" />
            </div>

            <div id="app__home_main_banner_content_link_text">
              <span>Or Watch how it workds</span>
            </div>

          </div> */}

        </div>

        {/*  */}
        <div id="app__home_main_banner_gif">

          <img src="./assets/images/banners/banner_main_animation.svg" alt="BANNER" />

        </div>

      </div>
    </>
  )
}