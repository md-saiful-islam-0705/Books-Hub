import PropTypes from "prop-types";
import { FaChevronDown } from "react-icons/fa";

const SortDropdown = ({ value, onChange }) => {
  return (
    <div className="dropdown dropdown-right my-5">
      <div tabIndex={0} role="button" className="btn m-1">
         {value || "None"} <FaChevronDown />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <button value="rating" onClick={onChange}>
            Rating
          </button>
        </li>
        <li>
          <button value="totalPages" onClick={onChange}>
            Number of Pages
          </button>
        </li>
        <li>
          <button value="yearOfPublishing" onClick={onChange}>
            Published Year
          </button>
        </li>
      </ul>
    </div>
  );
};

SortDropdown.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default SortDropdown;
