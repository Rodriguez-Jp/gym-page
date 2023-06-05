import ProgramCard from "./ProgramCard";

const Program = () => {
  return (
    <>
      <section className="mt-20">
        <div className="uppercase mx-auto text-center max-w-[90%]">
          <h1 className="text-3xl font-bold">
            Choose a <span className="text-red-500">Program</span>
          </h1>
          <img
            src="/public/media/line-dec.png"
            alt="line-decoration"
            className="mx-auto mt-5"
          />
        </div>
        <div className="text-center text-gray-500 max-w-lg mx-auto mt-5 font-light">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde ipsum
            doloribus animi quos quo corporis nostrum quia ex consectetur
            aliquam.
          </p>
        </div>
      </section>
      <section className="max-w-[70%] mx-auto mt-16 flex flex-row flex-wrap">
        <ProgramCard title={"Basic fitness"} />
        <ProgramCard title={"New Gym Training"} />
        <ProgramCard title={"Basic Muscle Course"} />
        <ProgramCard title={"Advance Muscle Course"} />
        <ProgramCard title={"Yoga Training"} />
        <ProgramCard title={"Body Building Course"} />
      </section>
    </>
  );
};

export default Program;
