import doctor from "./assets/doctor.png";

import { faPerson } from "@fortawesome/free-solid-svg-icons";

import Banner from "./components/Banner";
import NavLink from "./components/NavLink";
import Button from "./components/Button";
import StatisticsCard from "./components/StatisticsCard";
import ServiceCard from "./components/ServiceCard";
import RndCard from "./components/RndCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* HEADER */}
      <header className="flex min-h-screen flex-col">
        {/* banner */}
        <Banner />

        {/* NAV-LINK */}
        <NavLink />

        {/* MAIN */}
        <div className="container mx-auto flex flex-grow flex-col px-5 py-10 lg:py-0">
          <div className="flex flex-col-reverse items-center gap-10 lg:flex-grow lg:flex-row lg:justify-between">
            {/*  */}
            <div className="lg:w-1/2">
              <h1 className="text-3xl font-bold uppercase lg:text-5xl">
                Reach your instructor from anywhere!
              </h1>
              <p className="pb-5 pt-2 text-slate-600 md:w-2/3 md:pb-10 md:pt-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ratione fugit, quod quidem fuga iste rem. Autem porro maxime
                dolores placeat?
              </p>

              <Button>Book Now</Button>
            </div>
            {/*  */}
            <div className="image-parent flex items-center justify-center lg:w-1/2 lg:self-end">
              <img
                src={doctor}
                alt=""
                className="banner-img sm:w-2/3 lg:w-auto"
              />
            </div>
          </div>
        </div>
      </header>

      {/* statistics */}
      <div className="statistics mx-auto flex flex-col items-center justify-center gap-5 px-5 py-20 sm:flex-row">
        {/* child */}
        <StatisticsCard value={20} label="Instructors" />

        {/* child */}
        <StatisticsCard value={20} label="Patients" />

        {/* child */}
        <StatisticsCard value={20} label="Activities" />
      </div>

      {/* Service - steps */}
      <div className="mx-auto px-5 py-20 md:py-32">
        <h2 className="capitaliz pb-10 text-center text-2xl">
          Quick Solutions For Scheduling with doctor
        </h2>

        <div className="flex flex-wrap justify-center gap-5">
          {/* child */}
          <ServiceCard
            icon={faPerson}
            label={"Appointment"}
            description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio corporis cum a ipsum odit minima aliquid nihil optio
              aspernatur ipsam?`}
          />

          {/* child */}
          <ServiceCard
            icon={faPerson}
            label={"Appointment"}
            description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio corporis cum a ipsum odit minima aliquid nihil optio
              aspernatur ipsam?`}
          />

          {/* child */}
          <ServiceCard
            icon={faPerson}
            label={"Appointment"}
            description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio corporis cum a ipsum odit minima aliquid nihil optio
              aspernatur ipsam?`}
          />
        </div>
      </div>

      {/* BMI */}
      <div className="body-mass-index flex min-h-80 flex-col justify-center px-5 py-20">
        <div className="flex items-center justify-center">
          <form action="" className="w-full max-w-80 rounded-md bg-white p-5">
            <h3 className="my-5 text-center text-2xl font-medium">
              Body Mass Index
            </h3>

            {/* height */}
            <div className="mb-2">
              <label
                htmlFor="height"
                className="block text-sm font-medium leading-6 text-gray-700"
              >
                Your height (cm)
              </label>
              <div className="mt-2">
                <input
                  id="height"
                  name="height"
                  type="height"
                  required
                  className="block w-full rounded-md border-0 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* weight */}
            <div>
              <label
                htmlFor="height"
                className="block text-sm font-medium leading-6 text-gray-700"
              >
                Your weight (lbs)
              </label>
              <div className="mt-2">
                <input
                  id="height"
                  name="height"
                  type="height"
                  required
                  className="block w-full rounded-md border-0 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <a
              href="#"
              className="btn my-5 mt-10 flex justify-center rounded-md border px-5 py-3 font-medium uppercase"
            >
              Calculate
            </a>
          </form>
        </div>
      </div>

      {/* INSTRUCTORS */}
      <div className="container mx-auto px-5 py-20">
        <h2 className="capitaliz pb-10 text-center text-2xl">
          Meet Our Instructors
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {/* child */}
          <RndCard img={doctor} alt={"tite"} name={"Gregory Yames"} />
          {/* child */}
          <RndCard img={doctor} alt={"tite"} name={"Gregory Yames"} />
          {/* child */}
          <RndCard img={doctor} alt={"tite"} name={"Gregory Yames"} />
          {/* child */}
          <RndCard img={doctor} alt={"tite"} name={"Gregory Yames"} />
          {/* child */}
          <RndCard img={doctor} alt={"tite"} name={"Gregory Yames"} />
          {/* child */}
          <RndCard img={doctor} alt={"tite"} name={"Gregory Yames"} />
        </div>

        <div className="my-10 mt-20 text-center">
          <Button>See more </Button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
