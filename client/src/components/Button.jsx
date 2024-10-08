import PropTypes from "prop-types";

export default function Button({ children, url = "#" }) {
  return (
    <>
      <a
        href={url}
        className="btn inline-block rounded-md border px-5 py-3 font-medium uppercase"
      >
        {children}
      </a>
    </>
  );
}

// Define prop types
Button.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string,
};
