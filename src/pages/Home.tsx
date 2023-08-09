import { Helmet, HelmetProvider } from "react-helmet-async";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Space Tourism | Home</title>
          <body className="home"></body>
        </Helmet>

        <main className="home | grid-container grid-container--home">
          <div>
            <h1 className="home__title">
              So, You Want To Travel To <span>Space</span>
            </h1>
            <p className="home__text">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>

          <div>
            <NavLink to="/destination" className="home__link">
              Explore
            </NavLink>
          </div>
        </main>
      </HelmetProvider>
    </>
  );
}

export default Home;
