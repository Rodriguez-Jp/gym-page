const Header = () => {
  return (
    <>
      <div className="flex justify-around w-full h-20 absolute top-0 z-50 bg-slate-400/40">
        <div className="p-5">
          <a href="#">
            <h1 className="uppercase text-4xl text-white cursor-pointer">
              Training <span className="text-red-500">Studio</span>
            </h1>
          </a>
        </div>
        <div className="p-5">
          <ul className="flex">
            <li className="uppercase p-2 mr-4 text-red-500">
              <a href="#">Home</a>
            </li>
            <li className="uppercase p-2 mr-4 text-white hover:text-red-500 transition-colors duration-300 cursor-pointer">
              <a href="#">About</a>
            </li>
            <li className="uppercase p-2 mr-4 text-white hover:text-red-500 transition-colors durationion-300 cursor-pointer">
              <a href="#">Classes</a>
            </li>
            <li className="uppercase p-2 mr-4 text-white hover:text-red-500 transition-colors duration-300">
              <a href="#">Schedule</a>
            </li>
            <li className="uppercase p-2 mr-4 text-white hover:text-red-500 transition-colors duration-300">
              <a href="#">Contact</a>
            </li>
            <li className=" p-2  text-white bg-red-500 hover:opacity-75 transition-opacity duration-300">
              <button className="uppercase">SignUp</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
