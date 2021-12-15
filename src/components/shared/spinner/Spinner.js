import React from "react";
import SpinnerGif from "./Fidget-spinner.gif";

const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-96 py-20">
      <h3 className="text-red-500 text-3xl text-center mt-10">Loading...</h3>
      <img className="h-40" src={SpinnerGif} alt="" />
    </div>
  );
};

export default Spinner;