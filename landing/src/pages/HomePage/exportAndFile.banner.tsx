import { Button } from "../../components/common/Button"

export const ExportAndFileBanner = () => {
  
  return (
    <>
      <div id="app__home_export_and_file">

        <div id="app__home_export_and_file_content">
          <h1 id="title">Export and File With Ease</h1>
          <h3 id="subtitle">
          Download your completed tax forms to file yourself, send to your<br/>
          accountant, or import into your preferred filing software.
          </h3>
          <span>
            <Button
              size="md"
              color='info'
              variant='text'
              onClick={() => window.location.href = '/register'}
            >
              View Example Report
              <div id="arrow">
                <svg className="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.52729 12.1959C7.26694 12.4563 7.26694 12.8784 7.52729 13.1387C7.78764 13.3991 8.20975 13.3991 8.4701 13.1387L13.1368 8.47206C13.2033 8.40549 13.2529 8.32835 13.2854 8.24604C13.3119 8.1792 13.3279 8.10707 13.3313 8.03166C13.3356 7.93806 13.3204 7.84371 13.2854 7.75532C13.2529 7.67299 13.2034 7.59583 13.1368 7.52925L8.4701 2.86258C8.20975 2.60223 7.78764 2.60223 7.52729 2.86258C7.26694 3.12293 7.26694 3.54504 7.52729 3.80539L11.0559 7.33399L3.33202 7.33399C2.96383 7.33399 2.66536 7.63246 2.66536 8.00065C2.66536 8.36884 2.96383 8.66732 3.33202 8.66732H11.0559L7.52729 12.1959Z"></path>
                </svg>
              </div>
            </Button>
          </span>
        </div>

        <div id="app__home_export_and_file_banner">
          <img src="/img/banner_export_and_file_base.png" alt="" />
        </div>

      </div>
    </>
  )
}