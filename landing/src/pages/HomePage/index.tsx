import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { MainBanner } from "./main.banner";
import { PartnersBlock } from "./partners.banner";
import { HowItWorksBanner } from "./howItWorks.banner";
import { SaveMoneyBanner } from "./saveMoney.banner";
import { EasilyImportBanner } from "./easilyImport.banner";
import { ExportAndFileBanner } from "./exportAndFile.banner";
import { InternationalBanner } from "./internation.banner";
import { TurboPartnerBanner } from "./turboPartner.banner";
import { PlatformSliders } from "./platform.sliders";
import { KnowledgeBlock } from "./knowledge.block";
import { ReviewsBlock } from "./reviews.block";
import { CalculateBanner } from "./calculate.banner";
import './index.css';

export const HomePage = () => {
  
  return (
    <>

      {/* Header component */}
      <Header />

      <div className="app__home_content">

        <MainBanner />

        <PartnersBlock />

        <HowItWorksBanner />

        <SaveMoneyBanner />

        <EasilyImportBanner />

        <ExportAndFileBanner />

        <TurboPartnerBanner />

        <InternationalBanner />

        <PlatformSliders />

        <KnowledgeBlock />

        <ReviewsBlock />

        <CalculateBanner />

      </div>

      {/* Footer component */}
      <Footer />

    </>
  )
}