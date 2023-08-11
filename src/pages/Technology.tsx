import Dots from "../components/Dots";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState } from "react";

export default function Technology() {
  const slidesArray = [
    {
      id: 0,
      title: "Launch Vehicle",
      text: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
      imagePortrait: "/assets/technology/image-launch-vehicle-portrait.jpg",
      imageLandscape: "/assets/technology/image-launch-vehicle-landscape.jpg",
      active: true,
    },
    {
      id: 1,
      title: "Spaceport",
      text: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`,
      imagePortrait: "/assets/technology/image-spaceport-portrait.jpg",
      imageLandscape: "/assets/technology/image-spaceport-landscape.jpg",
      active: false,
    },
    {
      id: 2,
      title: "Space Capsule",
      text: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
      imagePortrait: "/assets/technology/image-space-capsule-portrait.jpg",
      imageLandscape: "/assets/technology/image-space-capsule-landscape.jpg",
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
    <HelmetProvider>
      <Helmet>
        <title>Space Tourism | Technology</title>
        <body className="technology"></body>
      </Helmet>

      <main className="grid-container--technology">
        <h1 className="title technology__title">
          <span>03</span>
          Space Launch 101
        </h1>

        <article className="technology__content">
          <Dots
            className="technology__dots dots-numbers"
            handleDotClick={handleDotClick}
            activeSlide={activeSlide}
            slides={slides}
          />

          <div>
            {slides.map(
              (slide) =>
                activeSlide === slide.id && (
                  <div key={slide.id}>
                    <h2 className="technology__sub-title">
                      <span>The Terminology...</span>
                      {slide.title}
                    </h2>
                    <p className="technology__text">{slide.text}</p>
                  </div>
                )
            )}
          </div>
        </article>

        {slides.map(
          (slide) =>
            activeSlide === slide.id && (
              <picture className="technology__image" key={slide.id}>
                <source
                  srcSet={slide.imagePortrait}
                  type="image/webp"
                  media="(min-width: 50em)"
                />
                <img src={slide.imageLandscape} alt="" />
              </picture>
            )
        )}
      </main>
    </HelmetProvider>
  );
}
