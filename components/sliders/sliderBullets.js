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
        className={` cursor-pointer ml-2 lg:ml-0 bg-white h-1 w-4 lg:h-1 lg:w-4 ${
          activeStep === i ? "opacity-100 " : "opacity-20 "
        }`}
        onClick={() => handleActiveStep(i)}
      ></span>
    );
  }

  return (
    <div className="flex md:mr-16  ">
      <div className="slider-bullets w-36 flex  mr-10 lg:mr-0  justify-evenly items-center">
        {/*    <i
          className="las la-angle-left  pr-2 cursor-pointer hover:text-white text-gray-600  lg:text-2xl font-bold"
          onClick={() => handleActiveStep(activeStep - 1)}
        ></i> */}
        {content.map((bullet) => bullet)}
        {/*  <i
          className="las la-angle-right  pr-2 cursor-pointer hover:text-white text-gray-600  lg:text-2xl font-bold"
          onClick={() => handleActiveStep(activeStep + 1)}
        ></i> */}
      </div>
    </div>
  );
}
