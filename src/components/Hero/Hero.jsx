import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Section from 'components/Section/Section';
import { Title } from './Hero.styled';

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2500,
};

const Hero = () => {
  return (
    <Section>
      <Title>Welcome to Meren Movies</Title>
      <Slider {...sliderSettings}>
        <div>
          <img src="https://via.placeholder.com/960x240" alt="" />
        </div>
        <div>
          <img src="https://via.placeholder.com/960x240" alt="" />
        </div>
        <div>
          <img src="https://via.placeholder.com/960x240" alt="" />
        </div>
      </Slider>
      <p>
        Explore Meren Movies - your gateway to captivating cinematic
        experiences! We offer a diverse selection of popular films, the latest
        movie releases, and cinematic classics. Immerse yourself in the world of
        cinema with our collection of films spanning various genres, discover
        the perfect movie to watch with friends and family, explore reviews and
        ratings, and dive into unforgettable cinematic adventures. At Meren
        Movies, you always have access to the thrilling realm of film!
      </p>
    </Section>
  );
};

export default Hero;
