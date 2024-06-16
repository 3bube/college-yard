import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import classNames from "classnames";
import logo from "/logo.png";
import image1 from "/moise-m-De4B-s2rOqg-unsplash 1.png"; 
import image2 from "/moise-m-HTP5klp7fn4-unsplash 1.png";
import image3 from "/linkedin-sales-solutions-u3hmzw5U-SI-unsplash 1.png";
import text1 from "/text1.png";
import text2 from "/text2.png";
import text3 from "/text3.png";

const backgrounds = [image1, image2, image3];
const texts = [
  "Discover student accommodation that suits your needs and budget. ",
  "Find the right people for you & share the journey with them ",
  "Take full control of your stay on one platform",
];
const imgTexts = [text1, text2, text3];

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(backgrounds[0]);
  const [textImage, setTextImage] = useState(imgTexts[0]);
  const navigate = useNavigate();

  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => {
        setBackgroundImage(backgrounds[currentIndex]);
        setTextImage(imgTexts[currentIndex]);
        setIsTransitioning(false);
      }, 500); // Duration of the fade-out transition
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning, currentIndex]);

  const handleNext = () => {
    if (currentIndex < backgrounds.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => setCurrentIndex(currentIndex + 1), 250); // Delay to start changing the background image
    } else if (currentIndex === backgrounds.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => setCurrentIndex(0), 250); // Reset to first slide
    }
  };
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setIsTransitioning(true);
      setTimeout(() => setCurrentIndex(currentIndex - 1), 250); // Delay to start changing the background image
    }
  };

  const handleSkip = () => {
    navigate("/welcome"); // Navigate to the welcome page or next step
  };

  return (
    <>
      <div
        className={`container relative min-h-screen w-screen flex flex-col items-center justify-between bg-cover bg-center transition-opacity duration-500 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Navigation Bar */}
        <nav className="w-full py-9 flex justify-center ">
          <img src={logo} alt="Logo" className="h-10" />
        </nav>
        {/* Main Content */}
        <div className="flex flex-col items-center justify-end flex-1 w-full text-center text-white z-10">
          {/* Paginator */}
          <div className="flex space-x-1 ">
            {backgrounds.map((_, index) => (
              <div
                key={index}
                className={classNames("h-2", "w-2", "m-0", {
                  "bg-[#96C75C] w-7": index === currentIndex,
                  "bg-gray-300": index !== currentIndex,
                })}
                onClick={() => setCurrentIndex(index)}
              ></div>
            ))}
          </div>

          <div className="mt-4 flex flex-col align-middle justify-center w-3/4">
            <img
              src={textImage}
              alt="text"
              className="h-22 mb-4"
            />
            <p className="font-light">{texts[currentIndex]}</p>
          </div>

          {/* Pagination Controls */}
          <div className="w-full flex flex-row mt-10 mb-7 justify-between px-5">
            <button
              className="mt-4 px-4 py-2 bg-[#96C75C] text-white"
              onClick={handleSkip}
            >
              Skip
            </button>

            <div className="flex space-x-4 ">
              <button
                className={classNames(
                  "px-4",
                  "py-2",
                  "bg-[#6e6e6e]",
                  "rounded-full",
                  { "bg-[#96C75C]": currentIndex != 0 }
                )}
                onClick={handlePrevious}
                disabled={currentIndex === 0}
              >
                <svg
                  width="23"
                  height="25"
                  viewBox="0 0 23 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.659505 16.1478L20.7723 24.2297L22.5537 20.216L5.23895 13.2585L5.23895 11.2009L22.5537 4.24278L20.7723 0.229736L0.743927 8.27692L0.659505 8.27692L0.659505 16.1437L0.660933 16.1437L0.659505 16.1478Z"
                    fill={currentIndex === 0 ? '#8C8C8C' : '#FFFFFF'}
                  />
                </svg>
              </button>
              <button
                className="px-4 py-2 bg-[#96C75C] rounded-full"
                onClick={handleNext}
              >
                <svg
                  width="23"
                  height="25"
                  viewBox="0 0 23 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.2067 8.85217L2.09391 0.770264L0.3125 4.78399L17.6273 11.7415V13.799L0.3125 20.7572L2.09391 24.7703L22.1223 16.7231H22.2067V8.85625H22.2053L22.2067 8.85217Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-36 z-0"
        style={{
          background: "linear-gradient(to top, rgba(150, 199, 92, 0.3), rgba(150, 199, 92, 0))"
        }}
        ></div>
      </div>
    </>
  );
};

export default Onboarding;
