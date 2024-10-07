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
        <div className="banner flex items-center justify-center gap-5 py-5 text-center">
          <img src={wmsu_logo} alt="WMSU Logo" className="hidden sm:block" />
          <div className="">
            <p className="text-xs capitalize text-slate-100">
              Western Mindanao State University
            </p>
            <p className="text-xs capitalize text-slate-100">
              College of Home Economics
            </p>
            <p className="text-xs capitalize text-slate-100">
              Department of Nutrition and Dietetics
            </p>
            <h2 className="text-lg font-medium uppercase lg:text-2xl">
              Online Consultation Clinic
            </h2>
          </div>
          <img src={he_logo} alt="HE Logo" className="hidden sm:block" />
        </div>

        {/* NAV-LINK */}
        <div className="container mx-auto p-5">
          <div className="hidden items-center justify-between lg:flex">
            <ul className="flex gap-5 text-lg">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Consultation</a>
              </li>
              <li>
                <a href="#">Doctors</a>
              </li>
              <li>
                <a href="#">Tools</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
            <ul className="flex items-center gap-5">
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a
                  href="#"
                  className="btn inline-block rounded-md border px-5 py-3 font-medium uppercase"
                >
                  Book now
                </a>
              </li>
            </ul>
          </div>
          <div className="block rounded-md border p-5 text-end lg:hidden lg:border-none">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>

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

              <a
                href="#"
                className="btn inline-block rounded-md border px-5 py-3 font-medium uppercase"
              >
                Book now
              </a>
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
        <div className="child flex flex-col items-center justify-center gap-2 rounded-md p-5 text-center">
          <h2 className="text-5xl text-green-800">18</h2>
          <h3 className="text-xs font-semibold uppercase">Instructor</h3>
        </div>

        {/* child */}
        <div className="child flex flex-col items-center justify-center gap-2 rounded-md p-5 text-center">
          <h2 className="text-5xl text-green-800">20</h2>
          <h3 className="text-xs font-semibold uppercase">Patient</h3>
        </div>

        {/* child */}
        <div className="child flex flex-col items-center justify-center gap-2 rounded-md p-5 text-center">
          <h2 className="text-5xl text-green-800">20</h2>
          <h3 className="text-xs font-semibold uppercase">Activities</h3>
        </div>
      </div>

      {/* Service - steps */}
      <div className="mx-auto px-5 py-20 md:py-32">
        <h2 className="capitaliz pb-10 text-center text-2xl">
          Quick Solutions For Scheduling with doctor
        </h2>

        <div className="flex flex-wrap justify-center gap-5">
          {/* child */}
          <div className="child w-96 rounded-md bg-white p-5">
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
          <div className="child w-96 rounded-md bg-white p-5">
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
          <div className="child w-96 rounded-md bg-white p-5">
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
          <div className="child max-w-80 rounded-lg bg-white p-5 lg:max-w-96">
            <div className="image-parent flex items-center justify-center rounded-lg bg-blue-200 px-3 pt-3">
              <img src={doctor} alt="" />
            </div>
            <p className="mt-5 text-center">Rnd. Gregory Yames</p>
          </div>
          {/* child */}
          <div className="child max-w-80 rounded-lg bg-white p-5 lg:max-w-96">
            <div className="image-parent flex items-center justify-center rounded-lg bg-blue-200 px-3 pt-3">
              <img src={doctor} alt="" />
            </div>
            <p className="mt-5 text-center">Rnd. Gregory Yames</p>
          </div>
          {/* child */}
          <div className="child max-w-80 rounded-lg bg-white p-5 lg:max-w-96">
            <div className="image-parent flex items-center justify-center rounded-lg bg-blue-200 px-3 pt-3">
              <img src={doctor} alt="" />
            </div>
            <p className="mt-5 text-center">Rnd. Gregory Yames</p>
          </div>
          {/* child */}
          <div className="child max-w-80 rounded-lg bg-white p-5 lg:max-w-96">
            <div className="image-parent flex items-center justify-center rounded-lg bg-blue-200 px-3 pt-3">
              <img src={doctor} alt="" />
            </div>
            <p className="mt-5 text-center">Rnd. Gregory Yames</p>
          </div>
          {/* child */}
          <div className="child max-w-80 rounded-lg bg-white p-5 lg:max-w-96">
            <div className="image-parent flex items-center justify-center rounded-lg bg-blue-200 px-3 pt-3">
              <img src={doctor} alt="" />
            </div>
            <p className="mt-5 text-center">Rnd. Gregory Yames</p>
          </div>
          {/* child */}
          <div className="child max-w-80 rounded-lg bg-white p-5 lg:max-w-96">
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
      <footer className="mx-auto px-5 py-20">
        <div className="container mx-auto flex flex-col-reverse gap-10 md:flex-row md:justify-between">
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
          <div className="flex flex-col gap-5 sm:flex-row">
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
