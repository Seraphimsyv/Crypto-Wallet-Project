import React from 'react';
import { Button } from "../../components/common/Button"

export const TrustPartnerBanner = () => {
  return (
    <>
      <div id="app__home_turbo_partner" className="container lg">

        <div id="app__home_turbo_partner_content">
          <h1 id="title">Trusted partner of the Trust</h1>
          <h3 id="subtitle">
            An important condition for the correct operation of trading robots is a good and, most importantly, reliable crypto wallet Trust. It ensures the speed of our bot and needs no introduction. Trust is the largest crypto platform trusted by more than a million people and we are among them
          </h3>
          <span>
            <Button
              size="md"
              color='info'
              variant='filled'
              onClick={() => window.location.href = '/register'}
            >
              See How it Works
            </Button>
          </span>
        </div>

        <div id="app__home_turbo_partner_banner">
          <img src="./assets/images/banners/banner_trust_wallet_partner.png" alt="" />
        </div>

      </div>
    </>
  )
}