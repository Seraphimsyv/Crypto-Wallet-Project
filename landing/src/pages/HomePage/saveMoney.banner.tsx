import { Button } from "../../components/common/Button"

export const SaveMoneyBanner = () => {
  return (
    <>
      <div id="app__home_save_your_money" className="container lg">

        <h1 id="title">
          Save Money On Your Tax<br/>
          Bill With Crypto Losses
        </h1>

        <p id="subtitle">
          Writing off crypto losses can help you save thousands.<br/>
          Claim your tax-savings today with Finance!
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