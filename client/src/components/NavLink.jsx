import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavLink() {
  return (
    <>
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
    </>
  );
}
