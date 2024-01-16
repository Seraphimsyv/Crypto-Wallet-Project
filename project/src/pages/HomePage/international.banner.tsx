import React from 'react';
import { Button } from "../../components/common/Button"

export const InternationalBanner = () => {
  return (
    <>
      <div id="app__home_internation" className="container lg">

        <div id="app__home_internation_banner">
          <img src="./assets/images/banners/banner_international_tax_reporting.png" alt="" />
        </div>

        <div id="app__home_internation_content">
          <h1 id="title">Level of international trade</h1>
          <h3 id="subtitle">
            Thanks to our bot you can make money on crypto trading from anywhere in the world. all you need is the internet and your desire to make money.
          </h3>
          <span>
            <Button
              size="md"
              color='info'
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