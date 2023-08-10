export default function Dots({ activeSlide, handleDotClick, slides }) {
  return (
    <div className="dots crew__dots">
      {slides.map((slide, index) => (
        <button
          key={slide.id}
          className="dot"
          aria-selected={activeSlide === index ? "true" : "false"}
          onClick={() => handleDotClick(index)}
        ></button>
      ))}
    </div>
  );
}
