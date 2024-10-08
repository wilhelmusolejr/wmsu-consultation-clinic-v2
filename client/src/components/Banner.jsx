import wmsu_logo from "../assets/logo/Western_Mindanao_State_University.png";
import he_logo from "../assets/logo/HE_Logo.png";

export default function Banner() {
  return (
    <>
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
    </>
  );
}
