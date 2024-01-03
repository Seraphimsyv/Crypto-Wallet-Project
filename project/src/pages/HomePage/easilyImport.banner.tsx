import React from 'react';
import { Button } from "../../components/common/Button"

export const EasilyImportBanner = () => {
  return (
    <>
      <div id="app__home_easily_import">

        <div className="container lg">

          <div id="app__home_easily_import_banner">
            <img src="/assets/images/banners/banner_import_historical_data.png" alt="" />
          </div>

          <div id="app__home_easily_import_content">
            <h1 id="title">
              Easily Import Historical Data
            </h1>
            <h3 id="subtitle">
              Finance integrates directly with your favorite platforms to make it easy to import your historical transactions.
              Whether you’re trading, earning interest,
              or buying NFTs you’ll be able import your transactions and calculate your taxes with ease.
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