import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import adimg4 from "../assets/adimg/adimg4.png";

const images = [adimg4];

function Advertisement() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const prevImage = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setFade(true);
    }, 300);
  };

  const nextImage = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      setFade(true);
    }, 300);
  };

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(nextImage, 3000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <img
        src={images[currentIndex]}
        alt="Advertisement"
        className={`w-full h-auto object-cover transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* ✅ Clean text, no background, small font on all screens */}
      {images[currentIndex] === adimg4 && (
        <div className="absolute bottom-1 left-1 text-white text-[6px] sm:text-[6px] md:text-[10px] lg:text-[10px]">
          *We use this logo only for branding
        </div>
      )}

      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={nextImage}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
          >
            <FaArrowRight />
          </button>
        </>
      )}
    </div>
  );
}

export default Advertisement;
