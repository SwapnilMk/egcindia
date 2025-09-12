import SiteFooter from "./components/footer/site-footer";
import SiteBanner from "./components/header/header-banner";
import SiteHeader from "./components/header/site-header";
import HomeSlider from "./components/home-slider";
import EGCIndiaHero from "./components/home-hero";
import SiteSponsor from "./components/footer/site-sponsor";

function App() {
  return (
    <div className="mx-auto">
      <SiteBanner />
      <SiteHeader />
      <HomeSlider />
      <EGCIndiaHero />
      <SiteSponsor/>
      <SiteFooter />
    </div>
  );
}

export default App;
