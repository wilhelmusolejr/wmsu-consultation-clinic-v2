import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavLink() {
  return (
    <>
      <div className="container mx-auto p-5">
        <div className="hidden items-center justify-between lg:flex">
          <ul className="flex gap-5 text-lg">
            <li>
              <a href="/">Home</a>
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
            {/* login */}
            <li>
              <a
                onClick={() =>
                  document.getElementById("login_modal").showModal()
                }
                href="#"
              >
                Login
              </a>
            </li>

            {/* btn - book now */}
            <li>
              <button className="btn">Book now</button>
            </li>
          </ul>
        </div>
        <div className="block rounded-md border p-5 text-end lg:hidden lg:border-none">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>

      {/* modal  */}
      <dialog id="login_modal" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
