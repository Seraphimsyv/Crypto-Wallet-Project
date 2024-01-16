import React from 'react';
import { Button } from "../../components/common/Button"

export const EasilyImportBanner = () => {
  return (
    <>
      <div id="app__home_easily_import">

        <div className="container lg">

          <div id="app__home_easily_import_banner">
            <img src="./assets/images/banners/banner_import_historical_data.png" alt="" />
          </div>

          <div id="app__home_easily_import_content">
            <h1 id="title">
              What is a cryptocurrency trading bot?
            </h1>
            <h3 id="subtitle">
              A bot for cryptocurrency trading is a computer program that buys and sells digital assets,
              either by the algorithm of the program itself, or with the participation of the trader.
              All bots at their core use various kinds of signals, algorithms, patterns, templates and trader's settings
            </h3>

            <span>
              <Button 
                size="md"
                color="info"
                variant="filled"
                onClick={() => window.location.href = '/register'}
              >
                See How It Works
              </Button>
            </span>
          </div>

        </div>

      </div>
    </>
  )
}