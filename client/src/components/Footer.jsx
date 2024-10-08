import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
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
