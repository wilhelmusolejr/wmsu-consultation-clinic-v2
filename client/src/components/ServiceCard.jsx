import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ServiceCard({ icon, label, description }) {
  return (
    <>
      <div className="child w-96 rounded-md bg-white p-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-400 p-3">
          <FontAwesomeIcon icon={icon} className="text-green-800" />
        </div>
        <h3 className="pb-2 pt-5 text-xl font-medium">{label}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </>
  );
}

ServiceCard.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
