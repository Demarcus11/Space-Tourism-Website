import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState } from "react";
import { motion } from "framer-motion";
import Dots from "../components/Dots";

export default function Crew() {
  const slidesArray = [
    {
      id: 0,
      title: "Commander",
      name: "Douglas Hurley",
      text: `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.`,
      image: "/assets/crew/image-douglas-hurley.png",
      imageWebp: "/assets/crew/image-douglas-hurley.webp",
      active: true,
    },
    {
      id: 1,
      title: "Mission Specialist",
      name: "Mark Shuttleworth",
      text: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.`,
      image: "/assets/crew/image-mark-shuttleworth.png",
      imageWebp: "/assets/crew/image-mark-shuttleworth.webp",
      active: false,
    },
    {
      id: 2,
      title: "Pilot",
      name: "Victor Glover",
      text: `Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.`,
      image: "/assets/crew/image-victor-glover.png",
      imageWebp: "/assets/crew/image-victor-glover.webp",
      active: false,
    },
    {
      id: 3,
      title: "Flight Engineer",
      name: "Anousheh Ansari",
      text: `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.`,
      image: "/assets/crew/image-anousheh-ansari.png",
      imageWebp: "/assets/crew/image-anousheh-ansari.webp",
      active: false,
    },
  ];

  const [slides, setSlides] = useState(slidesArray);
  const [activeSlide, setActiveSlide] = useState(0);

  // Function to change the active slide when the dots are clicked
  const handleDotClick = (index: number) => {
    const updatedSlides = slides.map((slide, i) => ({
      ...slide,
      active: i === index,
    }));

    setActiveSlide(index);
    setSlides(updatedSlides);
  };

  console.log(slides);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Space Tourism | Crew</title>
          <body className="crew"></body>
        </Helmet>
        <main>
          {slides.map((slide) => (
            <div
              className={`grid-container grid-container--crew ${
                !slide.active ? "hidden" : ""
              }`}
              key={slide.id}
            >
              <h1 className="title crew__title">
                <span>02</span>
                Meet Your Crew
              </h1>

              <div className="crew__content">
                <p className="crew__name">
                  <span>{slide.title}</span>
                  {slide.name}
                </p>
                <p className="crew__text">{slide.text}</p>
              </div>

              <Dots
                activeSlide={activeSlide}
                handleDotClick={handleDotClick}
                slides={slides}
                className="crew__dots"
              />

              <picture className="crew__image">
                <source srcSet={slide.imageWebp} type="image/webp" />
                <img src={slide.image} alt={slide.name} />
              </picture>
            </div>
          ))}
        </main>
      </HelmetProvider>
    </>
  );
}
