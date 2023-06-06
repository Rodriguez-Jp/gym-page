import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <>
      <div className="uppercase mx-auto text-center max-w-[90%]">
        <h1 className="text-3xl font-bold">{title}</h1>
        <img
          src="/media/line-dec.png"
          alt="line-decoration"
          className="mx-auto mt-5"
        />
      </div>
      <div className="text-center text-gray-500 max-w-lg mx-auto mt-5 font-light">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde ipsum
          doloribus animi quos quo corporis nostrum quia ex consectetur
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
