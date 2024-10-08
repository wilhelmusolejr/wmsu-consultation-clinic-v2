import PropTypes from "prop-types";

export default function StatisticsCard({ value, label }) {
  return (
    <>
      <div className="child flex flex-col items-center justify-center gap-2 rounded-md p-5 text-center">
        <h2 className="text-5xl text-green-800">{value}</h2>
        <h3 className="text-xs font-semibold uppercase">{label}</h3>
      </div>
    </>
  );
}

StatisticsCard.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};
