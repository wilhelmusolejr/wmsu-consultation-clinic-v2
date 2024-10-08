import PropTypes from "prop-types";

export default function RndCard({ img, alt, name }) {
  return (
    <>
      <div className="child max-w-80 rounded-lg bg-white p-5 lg:max-w-96">
        <div className="image-parent flex items-center justify-center rounded-lg bg-blue-200 px-5 pt-5">
          <img src={img} alt={alt} />
        </div>
        <p className="mt-5 text-center">Rnd. {name}</p>
      </div>
    </>
  );
}

RndCard.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
