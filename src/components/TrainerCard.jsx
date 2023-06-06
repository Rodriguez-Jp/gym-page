const TrainerCard = ({ typeOfWork, name, img }) => {
  return (
    <>
      <div className="w-2/5 shadow-lg mx-10">
        <div className="p-10 flex flex-col justify-center">
          <img src={`../public/media/${img}`} alt={name} />
          <p className="mt-5 mb-2 text-red-500 font-normal">{typeOfWork}</p>
          <h1 className="text-2xl font-normal">{name}</h1>
          <p className="max-w-full font-light text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur autem quis atque hic modi deserunt aliquam debitis, sed
            consequuntur. Molestias.
          </p>
          <div className="mt-6 text-2xl flex justify-between w-1/2">
            <i className="fa-brands fa-facebook "></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-behance"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainerCard;
