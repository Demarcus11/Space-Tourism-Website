import PropTypes from "prop-types";

Dots.propTypes = {
  className: PropTypes.string, // optionalProp is optional and can be any string
  text: PropTypes.string, // requiredProp is required and must be a string
};

export default function Dots({
  activeSlide,
  handleDotClick,
  slides,
  className,
}) {
  return (
    <div className={`dots ${className}`}>
      {slides.map((slide, index) => (
        <button
          key={slide.id}
          className="dot"
          aria-selected={activeSlide === index ? "true" : "false"}
          onClick={() => handleDotClick(index)}
        >
          {className === "technology__dots dots-numbers" && slide.id + 1}
        </button>
      ))}
    </div>
  );
}
