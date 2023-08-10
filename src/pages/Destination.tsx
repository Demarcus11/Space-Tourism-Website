import { Helmet, HelmetProvider } from "react-helmet-async";

function Destination() {
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

          <picture className="destination__image">
            <source
              srcSet="/assets/destination/image-moon.webp"
              type="image/webp"
            />
            <img src="/assets/destination/image-moon.png" alt="the moon" />
          </picture>

          <div className="tabs">
            <div>
              <input id="tab-1" name="planet" type="radio" />
              <label className="tab" htmlFor="tab-1">
                Moon
              </label>
            </div>
            <div>
              <input id="tab-2" name="planet" type="radio" />
              <label className="tab" htmlFor="tab-2">
                Mars
              </label>
            </div>
            <div>
              <input id="tab-3" name="planet" type="radio" />
              <label className="tab" htmlFor="tab-3">
                Europa
              </label>
            </div>
            <div>
              <input id="tab-4" name="planet" type="radio" />
              <label className="tab" htmlFor="tab-4">
                Titan
              </label>
            </div>
          </div>

          <article>
            <div>
              <h2 className="destination__category">Moon</h2>
              <p className="destination__text">
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </p>
            </div>

            <div className="destination__stats">
              <div>
                <h3>Avg. Distance</h3>
                <p>384,400 Km</p>
              </div>

              <div>
                <h3>Est. Travel Time</h3>
                <p>3 Days</p>
              </div>
            </div>
          </article>
        </main>
      </HelmetProvider>
    </>
  );
}

export default Destination;
