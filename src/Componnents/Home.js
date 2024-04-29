import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "../Componnents/Image/unsplash.jpg";
import Login from "./Login";

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="homeContainer">
      <div className="homeHeroContainer">
        <img src={Image} alt="pic" width="500px" />
      </div>

      <Login />

      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={Image} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Image} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Image} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="homeinnerdivs">
        <div>
          <a href="/home">
            <h1>Section1</h1>
          </a>
        </div>
        <div>
          <a href="/home">
            <h1>Section1</h1>
          </a>
        </div>
        <div>
          <a href="/home">
            <h1>Section1</h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
