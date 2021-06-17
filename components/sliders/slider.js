import { useRef, useState, useEffect, useLayoutEffect } from "react";
import MovieCard from "../Cards/MovieCard";
import SliderBullets from "./sliderBullets";

export default function Slider({ movies, category }) {
  const sliderData = movies.results;
  const sliderRefWidth = useRef(0);
  const scrollRefWidth = useRef(0);

  const [value, setValue] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [totalSteps, setTotalSteps] = useState(0);

  useEffect(() => {
    setValue(-sliderRefWidth.current.offsetWidth * activeStep);
    setTotalSteps(
      Math.floor(
        scrollRefWidth.current.offsetWidth / sliderRefWidth.current.offsetWidth
      )
    );
  }, [activeStep]);

  useEffect(() => {}, []);

  const handleActiveStep = (step) => {
    if (step >= 0 && step <= totalSteps) setActiveStep(step);
  };

  return (
    <div className="my-4">
      <div className="flex justify-between align-middle">
        <h3 className="text-2xl font-semibold mb-6 text-white px-10">
          {category}
        </h3>
        <SliderBullets
          bullets={totalSteps}
          handleActiveStep={handleActiveStep}
          activeStep={activeStep}
        />
      </div>

      <div ref={sliderRefWidth} className="slider mx-10   overflow-hidden  ">
        <div
          ref={scrollRefWidth}
          className="inline-flex  slick-list   transition duration-500 ease-in"
          style={{ transform: `translate3D(${value}px, 0px,0px)` }}
        >
          {sliderData.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
