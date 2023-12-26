import { Button } from "../../components/common/Button";

export const MainBanner = () => {
  return (
    <>
      <div
        id="app__home_main_banner"
      >

        <div id="app__home_main_banner_content">

          <h1 id="app__home_main_banner_content_title">
            Crypto Taxes Done in Minutes
          </h1>

          <p id="app__home_main_banner_content_subtitle">
            Cryptocurrency and NFT tax software built<br/>
            to save you time & maximize your refund
          </p>

          <ul id="app__home_main_banner_content_list">
            <li>
              <span />
              Free Portfolio Tracking
            </li>
            <li>
              <span />
              Official TurboTax Partner
            </li>
            <li>
              <span />
              International Support
            </li>
          </ul>

          <div id="app__home_main_banner_content_buttons">

            <Button
              color='info'
              variant='filled'
            >
              Get Started For Free
            </Button>

            <Button
              color='default'
              variant='outlined'
            >
              See Example Report
            </Button>

          </div>

          <div id="app__home_main_banner_content_link_watch">
            
            <div id="app__home_main_banner_content_link_icon">
              <img src="/img/video-camera-icon.png" alt="ICON" />
            </div>

            <div id="app__home_main_banner_content_link_text">
              <span>Or Watch how it workds</span>
            </div>

          </div>

        </div>

        {/*  */}
        <div id="app__home_main_banner_gif">

          <img src="/img/banner_main_animation.svg" alt="BANNER" />

        </div>

      </div>
    </>
  )
}