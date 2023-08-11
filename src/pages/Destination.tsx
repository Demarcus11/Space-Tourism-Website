import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Tabs from "../components/Tabs";

function Destination() {
  const slidesArray = [
    {
      id: 0,
      title: "Moon",
      text: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
      image: "/assets/destination/image-moon.png",
      imageWebp: "/assets/destination/image-moon.webp",
      averageDistance: "384,400 Km",
      estimatedTravelTime: "3 Days",
      active: true,
    },
    {
      id: 1,
      title: "Mars",
      text: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`,
      image: "/assets/destination/image-mars.png",
      imageWebp: "/assets/destination/image-mars.webp",
      averageDistance: "225 Mil. Km",
      estimatedTravelTime: "9 Months",
      active: false,
    },
    {
      id: 2,
      title: "Europa",
      text: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
      image: "/assets/destination/image-europa.png",
      imageWebp: "/assets/destination/image-europa.webp",
      averageDistance: "628 Mil. Km",
      estimatedTravelTime: "3 Years",
      active: false,
    },
    {
      id: 3,
      title: "Titan",
      text: `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`,
      image: "/assets/destination/image-titan.png",
      imageWebp: "/assets/destination/image-titan.webp",
      averageDistance: "1.6 Bil. Km",
      estimatedTravelTime: "7 Years",
      active: false,
    },
  ];

  const [slides, setSlides] = useState(slidesArray);
  const [activeSlide, setActiveSlide] = useState(0);

  // Function to change the active slide when the dots are clicked
  const handleTabChange = (index: number) => {
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
          <title>Space Tourism | Destination</title>
          <body className="destination"></body>
        </Helmet>
        <main className="destination | grid-container grid-container--destination">
          <h1 className="title destination__title">
            <span>01</span>
            Pick Your Destination
          </h1>

          {slides.map(
            (slide) =>
              activeSlide === slide.id && (
                <picture className="destination__image" key={slide.id}>
                  <source srcSet={slide.imageWebp} type="image/webp" />
                  <img src={slide.image} alt="the moon" />
                </picture>
              )
          )}

          <Tabs
            handleTabChange={handleTabChange}
            activeSlide={activeSlide}
            slides={slides}
          />

          <article>
            {slides.map(
              (slide) =>
                activeSlide === slide.id && (
                  <div key={slide.id}>
                    <div>
                      <h2 className="destination__category">{slide.title}</h2>
                      <p className="destination__text">{slide.text}</p>
                    </div>
                    <div className="destination__stats">
                      <div>
                        <h3>Avg. Distance</h3>
                        <p>{slide.averageDistance}</p>
                      </div>

                      <div>
                        <h3>Est. Travel Time</h3>
                        <p>{slide.estimatedTravelTime}</p>
                      </div>
                    </div>
                  </div>
                )
            )}
          </article>
        </main>
      </HelmetProvider>
    </>
  );
}

export default Destination;
