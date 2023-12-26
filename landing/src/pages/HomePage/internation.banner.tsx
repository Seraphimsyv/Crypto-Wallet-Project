import { Button } from "../../components/common/Button"

export const InternationalBanner = () => {
  return (
    <>
      <div id="app__home_internation" className="container lg">

        <div id="app__home_internation_banner">
          <img src="/img/banner_international_tax_reporting.png" alt="" />
        </div>

        <div id="app__home_internation_content">
          <h1 id="title">International<br/>Tax Reporting</h1>
          <h3 id="subtitle">
            Generate your crypto gains, losses, and income reports in any currency.
            These reports can be used to complete the relevant tax forms for your country.
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