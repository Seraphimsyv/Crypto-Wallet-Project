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
            <img src='/img/new-your-times-logo.png' alt="ICON" />
          </div>
          <div>
            <img src='/img/forbes-logo.png' alt="ICON" />
          </div>
          <div>
            <img src='/img/bloomberg-logo.png' alt="ICON" />
          </div>
          <div>
            <img src='/img/coindesk-logo.png.png' alt="ICON" />
          </div>
          <div>
            <img src='/img/turbotax-logo.png' alt="ICON" />
          </div>
        </div>

        <div
          id="app__home_partners_banner"
          className="container md"
        >
          <h5>see what they`re saying</h5>
          <h1>Trusted by over<br/><span>400,000</span> crypto investors</h1>
          <span>
            <Button
              color='info'
              variant='filled'
              onClick={() => window.location.href = '/register'}
            >
              See Reviews
            </Button>
          </span>
        </div>

      </div>
    </>
  )
}