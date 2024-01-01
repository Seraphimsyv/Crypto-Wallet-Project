import React from 'react';
import { Button } from "../../components/common/Button"

export const TurboPartnerBanner = () => {
  return (
    <>
      <div id="app__home_turbo_partner" className="container lg">

        <div id="app__home_turbo_partner_content">
          <h1 id="title">Trusted TurboTax<br/>Partner</h1>
          <h3 id="subtitle">
            Partnered with the largest tax preparation platform to make it easier than ever to report your crypto gains and losses. Your reports can be directly imported into TurboTax Online, TurboTax Desktop, TaxAct, and many other tax platforms!
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
          <img src="/img/banner_trusted_turbotax_partner.png" alt="" />
        </div>

      </div>
    </>
  )
}