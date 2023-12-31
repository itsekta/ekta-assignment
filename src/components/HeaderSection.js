import './HeaderSection.css';
import Image from 'next/image';

function HeaderSection() {
  return (
    <div className="header-section-wrapper">
      <div className="header-section">
        <div className="header-section-image-wrapper">
          {/* <img className="header-section-image" src="/rocket1-light.svg" /> */}
          <Image src="/rocket1-light.svg" className="header-section-image" alt="Rocket svg" width={64} height={64} />
        </div>
        <div className="header-section-heading">Launching New Module Soon!</div>
      </div>
      <p className="header-section-desc">
        Exciting things are in the works! We're currently <b>Crafting a new feature</b> for you. Keep an eye out for updates – We're working to make it available soon!
      </p>
    </div>
  );
}
export default HeaderSection;
