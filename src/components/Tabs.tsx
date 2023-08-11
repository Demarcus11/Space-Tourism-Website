export default function Tabs({ slides, activeSlide, handleTabChange }) {
  return (
    <div className="tabs">
      {slides.map((slide, index) => (
        <div key={slide.id}>
          <input
            id={`tab-${index}`}
            name="planet"
            type="radio"
            aria-selected={activeSlide === index ? "true" : "false"}
            onChange={() => handleTabChange(index)}
          />
          <label className="tab" htmlFor={`tab-${index}`}>
            {slide.title}
          </label>
        </div>
      ))}
    </div>
  );
}
