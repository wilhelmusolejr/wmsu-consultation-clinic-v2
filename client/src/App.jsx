import wmsu_logo from "./assets/logo/Western_Mindanao_State_University.png";
import he_logo from "./assets/logo/HE_Logo.png";
import doctor from "./assets/doctor.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faEnvelope,
  faPerson,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <>
      {/* HEADER */}
      <header className="flex min-h-screen flex-col">
        {/* BANNER */}
        <div className="banner py-5 text-center">
          {/* <img src={wmsu_logo} alt="WMSU Logo" /> */}
          <p className="text-xs capitalize text-slate-100">
            Western Mindanao State University
          </p>
          <p className="text-xs capitalize text-slate-100">
            College of Home Economics
          </p>
          <p className="text-xs capitalize text-slate-100">
            Department of Nutrition and Dietetics
          </p>
          <h2 className="text-lg font-medium uppercase">
            Online Consultation Clinic
          </h2>
          {/* <img src={he_logo} alt="HE Logo" /> */}
        </div>

        {/* NAV-LINK */}
        <div className="container border p-5 text-end">
          <FontAwesomeIcon icon={faBars} />
        </div>

        {/* MAIN */}
        <div className="container flex flex-grow flex-col items-start justify-center p-5">
          <h1 className="text-3xl font-bold uppercase">
            Reach your instructor from anywhere!
          </h1>
          <p className="pb-5 pt-2 text-slate-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            fugit, quod quidem fuga iste rem. Autem porro maxime dolores
            placeat?
          </p>

          <a
            href="#"
            className="btn inline-block rounded-md border px-5 py-3 font-medium uppercase"
          >
            Book now
          </a>
        </div>
      </header>

      {/* statistics */}
      <div className="statistics container flex items-center justify-center gap-2 py-10">
        {/* child */}
        <div className="child rounded-md p-3 text-center">
          <h2 className="text-5xl">18</h2>
          <h3 className="uppercase">Instructor</h3>
        </div>

        {/* child */}
        <div className="child rounded-md p-3 text-center">
          <h2 className="text-5xl">20</h2>
          <h3 className="uppercase">Patient</h3>
        </div>
      </div>

      {/* Service - steps */}
      <div className="container px-5 py-20">
        <h2 className="capitaliz pb-10 text-center text-2xl">
          Quick Solutions For Scheduling with doctor
        </h2>

        <div className="flex flex-wrap gap-5">
          {/* child */}
          <div className="child rounded-md bg-white p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-400 p-3">
              <FontAwesomeIcon icon={faPerson} className="text-green-800" />
            </div>
            <h3 className="pb-2 pt-5 text-xl font-medium">APPOINT</h3>
            <p className="text-slate-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio corporis cum a ipsum odit minima aliquid nihil optio
              aspernatur ipsam?
            </p>
          </div>

          {/* child */}
          <div className="child rounded-md bg-white p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-400 p-3">
              <FontAwesomeIcon icon={faPerson} className="text-green-800" />
            </div>
            <h3 className="pb-2 pt-5 text-xl font-medium">APPOINT</h3>
            <p className="text-slate-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio corporis cum a ipsum odit minima aliquid nihil optio
              aspernatur ipsam?
            </p>
          </div>

          {/* child */}
          <div className="child rounded-md bg-white p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-400 p-3">
              <FontAwesomeIcon icon={faPerson} className="text-green-800" />
            </div>
            <h3 className="pb-2 pt-5 text-xl font-medium">APPOINT</h3>
            <p className="text-slate-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio corporis cum a ipsum odit minima aliquid nihil optio
              aspernatur ipsam?
            </p>
          </div>
        </div>
      </div>

      {/* BMI */}
      <div className="body-mass-index container flex min-h-80 flex-col justify-center px-5 py-10">
        <div className="">
          <form action="" className="rounded-md bg-white p-2">
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
      <div className="container px-5 py-20">
        <h2 className="capitaliz pb-10 text-center text-2xl">
          Meet Our Instructors
        </h2>

        <div className="flex flex-wrap gap-5">
          {/* child */}
          <div className="child rounded-lg bg-white p-5">
            <div className="image-parent flex items-center justify-center rounded-lg bg-blue-200 px-3 pt-3">
              <img src={doctor} alt="" />
            </div>
            <p className="mt-5 text-center">Rnd. Gregory Yames</p>
          </div>
          {/* child */}
          <div className="child rounded-lg bg-white p-5">
            <div className="image-parent flex items-center justify-center rounded-lg bg-blue-200 px-3 pt-3">
              <img src={doctor} alt="" />
            </div>
            <p className="mt-5 text-center">Rnd. Gregory Yames</p>
          </div>
        </div>

        <a
          href="#"
          className="btn my-5 mt-10 inline-block rounded-md border px-5 py-3 font-medium uppercase"
        >
          See more
        </a>
      </div>

      {/* footer */}
      <footer className="container px-5 py-20">
        <div className="flex flex-col-reverse gap-10">
          {/*  */}
          <div className="">
            <h2 className="mb-5 text-lg font-medium uppercase text-white">
              Stay in Touch
            </h2>

            <div className="flex flex-col gap-3">
              {/* child */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center rounded-md bg-white p-2">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <p className="text-gray-300">0997-297-6807</p>
              </div>
              {/* child */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center rounded-md bg-white p-2">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <p className="text-gray-300">wmsuchedean@gmail.com</p>
              </div>
              {/* child */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center rounded-md bg-white p-2">
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
                <p className="text-gray-300">
                  WMSU - College of Home Economics
                </p>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col gap-5">
            {/* child */}
            <div className="">
              <h2 className="mb-5 text-lg font-medium uppercase text-white">
                Services
              </h2>
              <ul className="flex flex-col gap-2 capitalize text-gray-300">
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Doctors</a>
                </li>
                <li>
                  <a href="#">Articles</a>
                </li>
              </ul>
            </div>
            {/* child */}
            <div className="">
              <h2 className="mb-5 text-lg font-medium uppercase text-white">
                About{" "}
              </h2>
              <ul className="flex flex-col gap-2 capitalize text-gray-300">
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Doctors</a>
                </li>
                <li>
                  <a href="#">Articles</a>
                </li>
              </ul>
            </div>
            {/* child */}
            <div className="">
              <h2 className="mb-5 text-lg font-medium uppercase text-white">
                Legal{" "}
              </h2>
              <ul className="flex flex-col gap-2 capitalize text-gray-300">
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Doctors</a>
                </li>
                <li>
                  <a href="#">Articles</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
