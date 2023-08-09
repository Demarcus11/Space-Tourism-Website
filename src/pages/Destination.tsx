import { Helmet, HelmetProvider } from "react-helmet-async";

function Destination() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Space Tourism | Destination</title>
          <body className="destination"></body>
        </Helmet>
        <h1>Destination Page</h1>
      </HelmetProvider>
    </>
  );
}

export default Destination;
