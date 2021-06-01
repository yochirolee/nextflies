export default function SliderBullets({
  bullets,
  handleActiveStep,
  activeStep,
}) {
  let content = [];

  for (let i = 0; i < bullets; i++) {
    content.push(
      <span
        key={i}
        className={`rounded-full cursor-pointer  bg-white h-2 w-2 lg:h-2.5 lg:w-2.5 ${
          activeStep === i ? "opacity-100 " : "opacity-20 "
        }`}
        onClick={() => handleActiveStep(i)}
      ></span>
    );
  }

  return (
    <div className="flex   place-items-end mr-10 md:mr-16  ">
      <div className="slider-bullets lg:mx-auto  flex  w-full lg:w-1/5 justify-between items-center">
        <i
          className="las la-angle-left  pr-2 cursor-pointer text-white  lg:text-2xl font-bold"
          onClick={() => handleActiveStep(activeStep - 1)}
        ></i>
        {content.map((bullet) => bullet)}
        <i
          className="las la-angle-right  pr-2 cursor-pointer text-white  lg:text-2xl font-bold"
          onClick={() => handleActiveStep(activeStep + 1)}
        ></i>
      </div>
    </div>
  );
}
