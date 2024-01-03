import React from 'react';
import { Button } from "../../components/common/Button"

export const CalculateBanner = () => {

  return (
    <>
      <div
        id="app__home_calculate_block"
      >
        {/* Banners */}
        <div id="app__home_calculate_banner_left">
          <img src="/assets/images/banners/banner.calculate-left.png" alt="" />
        </div>
        <div id="app__home_calculate_banner_right">
          <img src="/assets/images/banners/banner.calculate-right.png" alt="" />
        </div>
        {/* Content */}
        <div id="app__home_calculate_banner_content">
          <h1 id="title">Calculate Your Crypto Taxes</h1>
          <ul id="app__home_calculate_banner_content_list">
            <li>
              <span />
              Free Portfolio Tracking
            </li>
            <li>
              <span />
              Official TurboTax Partner
            </li>
            <li>
              <span />
              International Support
            </li>
          </ul>
          <span>
            <Button
              size="md"
              color="info"
              variant='filled'
              onClick={() => window.location.href = '/register'}
            >
              Get Started For Free
            </Button>
          </span>
        </div>
      </div>
    </>
  )
}