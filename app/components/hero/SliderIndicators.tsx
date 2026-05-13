interface SliderIndicatorsProps {
  totalSlides: number;
  currentSlide: number;
  onSelect: (index: number) => void;
}

const SliderIndicators = ({ totalSlides, currentSlide, onSelect }: SliderIndicatorsProps) => {
  return (
    <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-40 flex space-x-3">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`w-12 h-1 transition-all duration-500 rounded-full ${
            index === currentSlide ? 'bg-white' : 'bg-white/30'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default SliderIndicators;
