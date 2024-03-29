import PropTypes from "prop-types";
export default function SearchBar({ keyword, keywordChange }) {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Cari berdasarkan nama"
      value={keyword}
      onChange={(e) => keywordChange(e.target.value)}
    />
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};
