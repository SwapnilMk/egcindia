import diamondSponsorLogo from "@/assets/logo/diamondsponsor.png";
import aecciLogo from "@/assets/logo/aecci.png";
import apedaLogo from "@/assets/logo/apeda.png";

const SiteSponser = () => {
  return (
    <div className="w-full mt-8 p-4 bg-white flex flex-col md:flex-row justify-around items-center">
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        <img src={apedaLogo} alt="APEDA" className="h-27" />
      </div>
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        <img src={diamondSponsorLogo} alt="Diamond Sponsor" className="h-27" />
      </div>
      <div className="flex items-center space-x-4">
        <img src={aecciLogo} alt="AECCO" className="h-27" />
      </div>
    </div>
  );
};

export default SiteSponser;
