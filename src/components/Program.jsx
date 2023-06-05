import ProgramCard from "./ProgramCard";
import SectionTitle from "./SectionTitle";

const Program = () => {
  return (
    <>
      <SectionTitle
        title={
          <>
            {" "}
            Choose a <span className="text-red-500"> Program </span>
          </>
        }
      />
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
