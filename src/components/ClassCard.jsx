const ClassCard = ({ title }) => {
  return (
    <>
      <div className="flex shadow-md justify-center items-center text-2xl p-8 mb-8">
        <img src="/media/tabs-first-icon.png" alt="class-icon" />
        <h1 className="ml-5 text-center">{title}</h1>
      </div>
    </>
  );
};

export default ClassCard;
