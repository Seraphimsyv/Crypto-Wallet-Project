import React from 'react';
import { Button } from "../../components/common/Button"

export const SaveMoneyBanner = () => {
  return (
    <>
      <div id="app__home_save_your_money" className="container lg">

        <h1 id="title">
          Running a bot is a good way to increase your balance without requiring constant involvement on your part.
        </h1>

        <p id="subtitle">
          Connect the trading bot together with our team and your returns on your cryptocurrency investments will skyrocket
        </p>

        <span>
          <Button
            size="md"
            color="info"
            variant="filled"
            onClick={() => window.location.href = '/register'}
          >
            Learn More
          </Button>
        </span>

      </div>
    </>
  )
}