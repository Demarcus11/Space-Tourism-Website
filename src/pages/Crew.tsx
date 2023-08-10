import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Crew() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Space Tourism | Crew</title>
          <body className="crew"></body>
        </Helmet>
        <main className="crew | grid-container grid-container--crew">
          <h1 className="title crew__title">
            <span>02</span>
            Meet Your Crew
          </h1>

          <div className="crew__content">
            <p className="crew__name">
              <span>Commander</span>
              Douglas Hurley
            </p>
            <p className="crew__text">
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>
          </div>

          {/* Swiper JS for the slider and dots */}
          <div className="crew__dots">
            <button>*</button>
            <button>*</button>
            <button>*</button>
            <button>*</button>
          </div>

          <picture className="crew__image">
            <source
              srcSet="/assets/crew/image-douglas-hurley.webp"
              type="image/webp"
            />
            <img
              src="/assets/crew/image-douglas-hurley.png"
              alt="douglas hurley"
            />
          </picture>
        </main>
      </HelmetProvider>
    </>
  );
}
