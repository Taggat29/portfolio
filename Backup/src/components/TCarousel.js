import html from "../assets/html.svg";
import react from "../assets/react.svg";
import windows from "../assets/windows.svg";
import tailwind from "../assets/tailwind.svg";
import python from "../assets/python.svg";
import node from "../assets/nodejs.svg";
import javascript from "../assets/javascript.svg";
import material from "../assets/material-ui-1.svg";
import git from "../assets/git.svg";
import Skillcard from "./Skillcard";

const slides = [
  {
    src: html,
    alt: "html",
  },
  {
    src: react,
    alt: "react",
  },
  {
    src: windows,
    alt: "windows",
  },
  {
    src: tailwind,
    alt: "tailwind",
  },
  {
    src: python,
    alt: "python",
  },
  {
    src: node,
    alt: "node",
  },
  {
    src: javascript,
    alt: "javascript",
  },
  {
    src: material,
    alt: "material",
  },
  {
    src: git,
    alt: "git",
  },
];


export default function TCarousel() {
  return (
    <>
      <Skillcard key={slides[0].alt} src={slides[0].src} alt={slides[0].alt} />
      <Skillcard key={slides[1].alt} src={slides[1].src} alt={slides[1].alt} />
      <Skillcard key={slides[2].alt} src={slides[2].src} alt={slides[2].alt} />
      <Skillcard key={slides[3].alt} src={slides[3].src} alt={slides[3].alt} />
      <Skillcard key={slides[4].alt} src={slides[4].src} alt={slides[4].alt} />
      <Skillcard key={slides[5].alt} src={slides[5].src} alt={slides[5].alt} />
      <Skillcard key={slides[6].alt} src={slides[6].src} alt={slides[6].alt} />
      <Skillcard key={slides[7].alt} src={slides[7].src} alt={slides[7].alt} />
      <Skillcard key={slides[8].alt} src={slides[8].src} alt={slides[8].alt} />
    </>
  );
}
