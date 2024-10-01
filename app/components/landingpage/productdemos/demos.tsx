import React from "react";
import AllDemos from "./AllDemos";


const ProductDemos = () => {

  return (
    <>
      <div className="md:py-20 py-12 relative dark:bg-dark" id="demos">
        <div className="container">
          <div className=" lg:w-8/12 w-full" data-aos="fade-up" data-aos-duration="500">
            <p className="text-body text-sm font-medium dark:text-darkmuted" >What’s included?</p>
            <h2 className=" sm:text-[30px] text-2xl font-bold leading-10 mt-1">
            6 multipurpose and easily customizable demo variations included in the package
            </h2>
          </div>
          {/* Demos */}
          <AllDemos />
        </div>
      </div>
    </>
  );
};

export default ProductDemos;
