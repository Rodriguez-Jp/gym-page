import { useState } from "react";
import Header from "./components/Header";
import FrontPage from "./components/FrontPage";
import Program from "./components/Program";
import SectionTitle from "./components/SectionTitle";
import ClassCard from "./components/ClassCard";
import TrainerCard from "./components/TrainerCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <FrontPage />
        <Program />
        {/* Become a member section */}
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

        {/* Classes section */}
        <section className="max-w-[80%] mx-auto mt-20">
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

        {/* Classes schedule section */}
        <section className="bg-[url('public/media/schedule-bg.jpeg')] min-w-full bg-cover bg-no-repeat mt-20 ">
          <div className="py-28">
            <SectionTitle
              title={
                <>
                  <span className="text-white">Classes</span>{" "}
                  <span className="text-red-500">Schedule</span>
                </>
              }
            />
            <div className="mx-auto w-full mt-14">
              <ul className="flex justify-center text-white font-normal">
                <li>
                  <span className="text-red-500">
                    <a href="#" className="mx-4">
                      Monday
                    </a>
                  </span>
                  <span> / </span>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-red-500 transition-colors duration-300 cursor-pointer mx-4"
                  >
                    Tuesday
                  </a>
                  <span> / </span>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-red-500 transition-colors duration-300 cursor-pointer mx-4"
                  >
                    Wednesday
                  </a>
                  <span> / </span>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-red-500 transition-colors duration-300 cursor-pointer mx-4"
                  >
                    Thursday
                  </a>
                  <span> / </span>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-red-500 transition-colors duration-300 cursor-pointer mx-4"
                  >
                    Friday
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full flex justify-center mt-10">
              <table>
                <tbody className="border border-solid border-white text-white">
                  <tr className="border border-solid border-white w-[20%] h-[20%]">
                    <td className="border border-solid border-white p-10">
                      Fitness class
                    </td>
                    <td className="border border-solid border-white p-10">
                      10:00AM - 11:30AM
                    </td>
                    <td className="border border-solid border-white p-10"></td>
                    <td className="border border-solid border-white p-10">
                      William G. Stewart
                    </td>
                  </tr>
                  <tr className="border border-solid border-white w-[20%] h-[20%]">
                    <td className="border border-solid border-white p-10">
                      Muscle Training
                    </td>
                    <td className="border border-solid border-white p-10"></td>
                    <td className="border border-solid border-white p-10"></td>
                    <td className="border border-solid border-white p-10">
                      Paul D. Newman
                    </td>
                  </tr>
                  <tr className="border border-solid border-white w-[20%] h-[20%]">
                    <td className="border border-solid border-white p-10">
                      Body building
                    </td>
                    <td className="border border-solid border-white p-10"></td>
                    <td className="border border-solid border-white p-10">
                      2:30PM - 3:30PM
                    </td>
                    <td className="border border-solid border-white p-10">
                      Boyd C. Harris
                    </td>
                  </tr>
                  <tr className="border border-solid border-white w-[20%] h-[20%]">
                    <td className="border border-solid border-white p-10 ">
                      Yoga Training Class
                    </td>
                    <td className="border border-solid border-white p-10"></td>
                    <td className="border border-solid border-white p-10"></td>
                    <td className="border border-solid border-white p-10">
                      Hector T. Daigle
                    </td>
                  </tr>
                  <tr className="border border-solid border-white w-[20%] h-[20%]">
                    <td className="border border-solid border-white text-center">
                      Advanced Training
                    </td>
                    <td className="border border-solid border-white p-10"></td>
                    <td className="border border-solid border-white p-10"></td>
                    <td className="border border-solid border-white p-10">
                      Bret D. Bowers
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Experts section */}
        <section className="max-w-[75%] mx-auto mt-20">
          <SectionTitle
            title={
              <>
                Expert <span className="text-red-500">Trainers</span>
              </>
            }
          />
          <div className="flex justify-between mt-10">
            <TrainerCard
              typeOfWork={"Strength Trainer"}
              name={"Bret D. Bowers"}
              img={"first-trainer.jpeg"}
            />
            <TrainerCard
              typeOfWork={"Muscle Trainer"}
              name={"Hector T. Daigle"}
              img={"second-trainer.jpeg"}
            />
            <TrainerCard
              typeOfWork={"Power Trainer"}
              name={"Paul D. Newman"}
              img={"third-trainer.jpeg"}
            />
          </div>
        </section>

        {/* Form section */}
        <section className="w-full mt-20">
          <div className="flex bg-[url(public/media/contact-bg.jpeg)] bg-cover bg-no-repeat">
            <div className="w-1/2">
              <img src="public/media/maps.png" alt="maps" />
            </div>
            <div className="w-1/2 p-10">
              <form className="flex flex-col bg-white p-10">
                <div className="flex justify-between">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="border p-3 font-normal w-[48%] mb-10"
                    placeholder="Name"
                    autoComplete="given-name"
                  />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="border p-3 font-normal w-[48%] mb-10"
                    placeholder="Email"
                    autoComplete="email"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="border p-3 font-normal mb-10"
                  placeholder="Subject"
                />
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  className="border p-3 font-normal mb-10"
                  placeholder="Message"
                ></textarea>
                <input
                  type="submit"
                  value="Send Message"
                  className="bg-red-500 uppercase font-bold text-center p-3 text-white cursor-pointer hover:opacity-80 transition-opacity duration-300"
                />
              </form>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
