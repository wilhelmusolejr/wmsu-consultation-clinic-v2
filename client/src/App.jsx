import wmsu_logo from "./assets/logo/Western_Mindanao_State_University.png";
import he_logo from "./assets/logo/HE_Logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
          <h1 className="text-2xl font-bold uppercase">
            Reach your instructor from anywhere!
          </h1>
          <p className="pb-5 pt-2">
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
    </>
  );
}

export default App;
