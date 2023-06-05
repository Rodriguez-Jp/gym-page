import { useState } from "react";
import Header from "./components/Header";
import FrontPage from "./components/FrontPage";
import Program from "./components/Program";
import SectionTitle from "./components/SectionTitle";
import ClassCard from "./components/ClassCard";

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
        <section className="max-w-[80%] mx-auto">
          <SectionTitle
            title={
              <>
                Our <span className="text-red-500">classes</span>
              </>
            }
          />
          <div className="flex mt-8">
            <div className="w-[50%]">
              <ClassCard
                title={
                  <>
                    <span className="text-red-500">First Training Club</span>
                  </>
                }
              />
              <ClassCard title={"Second Training Club"} />
              <ClassCard title={"Third Training Club"} />
              <ClassCard title={"Fourth Training Club"} />
              <button className="w-full bg-red-500 uppercase font-bold text-center p-3 text-white rounded-md">
                View All Schedules
              </button>
            </div>
            <div className="ml-14">
              <div>
                <img
                  src="public/Media/training-image-01.jpeg"
                  alt="training-img"
                  className="object-cover w-full rounded-lg"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold my-5">
                  First Training Class
                </h1>
                <p className="font-light my-5 text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia ratione tenetur odit nostrum maiores, rem cumque ea,
                  consectetur modi molestiae reprehenderit, voluptatibus porro
                  asperiores incidunt voluptatem delectus veniam! Vitae, sit!
                </p>
                <button className="bg-red-500 uppercase font-bold text-center p-3 text-white">
                  <a href="#">View schedule</a>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
