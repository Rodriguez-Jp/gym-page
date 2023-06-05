const ProgramCard = ({ title }) => {
  return (
    <>
      <div className="w-1/2 flex mb-16">
        <img src="/public/media/features-first-icon.png" alt="program-img" />
        <div className="ml-5">
          <h1 className="text-2xl">{title}</h1>
          <p className="text-gray-500 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            voluptates!
          </p>
          <div className="mt-2">
            <a
              href="#"
              className="text-sm  uppercase text-red-500 font-normal hover:underline decoration-solid cursor-pointer "
            >
              Discover more
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramCard;
