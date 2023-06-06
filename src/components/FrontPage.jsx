const FrontPage = () => {
  return (
    <>
      <section className="relative uppercase">
        <video
          src="/media/gym-video.mp4"
          autoPlay
          muted
          loop
          className="w-full z-10 object-cover max-h-screen opacity-60"
        ></video>
        <div className="overlay absolute top-0 bottom-0 right-0 left-0 w-full h-full flex justify-center items-center bg-black/50">
          <div>
            <h2 className=" text-white text-xl text-center mb-5">
              Work harder, get stronger
            </h2>
            <h1 className="text-white text-8xl font-semibold p-2">
              Easy with our <span className="text-red-500">Gym</span>
            </h1>
            <div className="bg-red-500 text-white p-3 w-[20%] text-center mx-auto mt-10 cursor-pointer hover:opacity-80 transition-opacity duration-300">
              <button className="uppercase">
                <a href="#">Become a member</a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FrontPage;
