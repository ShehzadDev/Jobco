import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 py-16">
      <div className="flex container mx-auto shadow-[12px_12px_0px_0px_#2cb1bc] border-solid border-2 border-sky-500 p-10 rounded-3xl text-center md:text-left">
        <div className="w-full md:w-2/3">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-2">
            Job<span className="text-[#2cb1bc]">Tracking</span> App
          </h1>
          <p className="text-base md:text-lg lg:text-xl lg:w-4/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            veniam asperiores doloremque rem iusto nam eveniet, delectus ullam
            ea tenetur laborum architecto nostrum sint quam porro ex laudantium
            suscipit. Deserunt, officiis, veritatis commodi recusandae corporis
            ipsum provident sit nisi dolor consequuntur consequatur officia.
            Corrupti fuga optio tempore qui perferendis rerum.
          </p>
          <div className="flex flex-col md:flex-row gap-2 mt-4">
            <Button text="Register" />
            <Button text="Login / Demo User" />
          </div>
        </div>

        <div className="flex items-center justify-center mt-4 md:mt-0">
          <img
            src="../src/assets/images/hero.svg"
            alt=""
            className="h-80 rounded-lg hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
