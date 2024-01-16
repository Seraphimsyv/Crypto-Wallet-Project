import React from 'react';
import { Button } from "../../components/common/Button";

export const PartnersBlock = () => {
  return (
    <>
      <div
        id="app__home_partners_block"
      >

        <div
          id="app__home_partners_gallery"
          className="container md"
        >
          <div>
            <img src='./assets/images/logotypes/new-your-times-logo.png' alt="ICON" />
          </div>
          <div>
            <img src='./assets/images/logotypes/forbes-logo.png' alt="ICON" />
          </div>
          <div>
            <img src='./assets/images/logotypes/bloomberg-logo.png' alt="ICON" />
          </div>
          <div>
            <img src='./assets/images/logotypes/coindesk-logo.png.png' alt="ICON" />
          </div>
          <div>
            <img src='./assets/images/logotypes/trustwallet-logo.png' alt="ICON" />
          </div>
        </div>

        <div
          id="app__home_partners_banner"
          className="container md"
        >
          <h5>see what they`re saying</h5>
          <h1>Trusted by over<br/><span>10,000</span> crypto investors</h1>
          <span>
            <Button
              color='info'
              variant='filled'
              onClick={() => window.location.href = '#app__home_rewievs_block'}
            >
              See Reviews
            </Button>
          </span>
        </div>

      </div>
    </>
  )
}