import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Naveen Sundriyal
          <br/>
          Crafting Code and Content
        </h1>
      </div>
      <Animate
  play
  duration={1.5}
  delay={1}
  start={{
    opacity: 0, // Initial opacity of 0 (fully transparent)
  }}
  end={{
    opacity: 1, // Ending opacity of 1 (fully opaque)
  }}
>
  <div className="home__contact-me">
    <button onClick={handleNavigateToContactMePage}>Hire Me</button>
  </div>
</Animate>

    </section>
  );
};
export default Home;
