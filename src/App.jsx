import { useState } from "react";
import Header from "./components/Header";
import FrontPage from "./components/FrontPage";
import Program from "./components/Program";

function App() {
  return (
    <>
      <Header />
      <main>
        <FrontPage />
        <Program />
        <section className="bg-[url('/public/media/cta-bg.jpeg')] min-w-full bg-cover bg-no-repeat h-[379px]">
          <div className="mx-auto text-center  text-white max-w-4xl h-full flex flex-col justify-center items-center">
            <h1 className="text-3xl mt-10 mb-6 font-bold uppercase">
              don't <span className="text-red-500">think</span>, begin{" "}
              <span className="text-red-500">today</span>!
            </h1>
            <p className="mb-8 font-normal text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, in
              hic ullam molestias quae quos, laboriosam, atque modi molestiae
              natus magnam impedit ipsam suscipit!
            </p>
            <button className="uppercase bg-red-500 hover:opacity-80 p-4 font-normal">
              <a href="#">Become a member</a>
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
