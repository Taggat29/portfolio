import html from "../assets/html.svg";
import react from "../assets/react.svg";
import windows from "../assets/windows.svg";
import tailwind from "../assets/tailwind.svg";
import python from "../assets/python.svg";
import node from "../assets/nodejs.svg";
import javascript from "../assets/javascript.svg";
import material from "../assets/material-ui-1.svg";
import github from "../assets/github.svg";
import Skillcard from "./Skillcard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    src: html,
    alt: "HTML5",
  },
  {
    src: react,
    alt: "React",
  },
  {
    src: windows,
    alt: "Windows",
  },
  {
    src: tailwind,
    alt: "Tailwind CSS",
  },
  {
    src: python,
    alt: "Python",
  },
  {
    src: node,
    alt: "NodeJS",
  },
  {
    src: javascript,
    alt: "JavaScript",
  },
  {
    src: material,
    alt: "Material UI",
  },
  {
    src: github,
    alt: "GitHub",
  },
];

export default function TCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings} style={{ maxWidth: 100 + "%", padding: 20 }}>
        <Skillcard
          key={slides[0].alt}
          src={slides[0].src}
          alt={slides[0].alt}
        />
        <Skillcard
          key={slides[1].alt}
          src={slides[1].src}
          alt={slides[1].alt}
        />
        <Skillcard
          key={slides[2].alt}
          src={slides[2].src}
          alt={slides[2].alt}
        />
        <Skillcard
          key={slides[3].alt}
          src={slides[3].src}
          alt={slides[3].alt}
        />
        <Skillcard
          key={slides[4].alt}
          src={slides[4].src}
          alt={slides[4].alt}
        />
        <Skillcard
          key={slides[5].alt}
          src={slides[5].src}
          alt={slides[5].alt}
        />
        <Skillcard
          key={slides[6].alt}
          src={slides[6].src}
          alt={slides[6].alt}
        />
        <Skillcard
          key={slides[7].alt}
          src={slides[7].src}
          alt={slides[7].alt}
        />
        <Skillcard
          key={slides[8].alt}
          src={slides[8].src}
          alt={slides[8].alt}
        />
      </Slider>
    </>
  );
}