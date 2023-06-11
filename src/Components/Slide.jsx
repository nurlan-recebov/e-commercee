import Carousel from "react-bootstrap/Carousel";
import logo from "../assets/img/slider3.jpg";
import logo1 from "../assets/img/slider8.jpg";
import logo2 from "../assets/img/slider1.jpg";
import Button from "./ButtonStyled";
function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className="d-block" style={{objectFit:'cover'}} src={logo} alt="First slide" />
        <Carousel.Caption>
          <Button>Shop Now</Button>
          <h3>Big Patterns are back in fashion</h3>
          <p>Create unlimited & Powerfull Sliders...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block object-fit-cover " src={logo2} alt="Second slide" />
        <Carousel.Caption>
          <Button>Shop Now</Button>
          <h3>Fashion in the Rhytem of Salsa</h3>
          <p>Create unlimited & Powerfull Sliders...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block object-fit-cover" src={logo1} alt="Third slide" />
        <Carousel.Caption>
          <Button>Shop Now</Button>
          <h3>The latest men's trends this season</h3>
          <p>Create unlimited & Powerfull Sliders...</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
