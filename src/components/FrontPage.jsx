const FrontPage = () => {
  return (
    <>
      <section className="relative">
        <video
          src="../public/media/gym-video.mp4"
          autoPlay
          muted
          loop
          className="w-full z-10 object-cover max-h-screen opacity-60"
        ></video>
        <div className="overlay absolute top-0 bottom-0 right-0 left-0 w-full h-full flex justify-center items-center">
          <div>
            <h2 className="uppercase text-white">Work harder, get stronger</h2>
            <h1>
              Easy with our <span>Gym</span>
            </h1>
            <button>Become a member</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FrontPage;
