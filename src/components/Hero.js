import heroImage from "../assets/images/3_Relax.png";
import "../assets/styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-texts">
        <h1>Throw paperwork into the trash where it belongs.</h1>
        <p>
          Eliminate all the hassle involved in managing people operations by
          automating it.
        </p>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Illustration of guy relaxing" />
      </div>
    </div>
  );
};

export default Hero;
