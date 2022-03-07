import HeroBanner from '../assets/images/air-bnb-main-banner.png';

function HeroBannerContent() {
    return (
        <div className="banner-content-container">
            <div className="hero-banner-wrapper">
                <img src={HeroBanner} alt="Online Experience"/>
            </div>
            <div className="content-wrapper">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    );
}

export default HeroBannerContent;
