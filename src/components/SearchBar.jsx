import PropTypes from "prop-types";
import { LocaleConsumer } from "../context/LocaleContext";
export default function SearchBar({ keyword, keywordChange }) {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <input
            type="text"
            className="search-bar"
            placeholder={
              locale === "id" ? "Cari berdasarkan nama" : "Search by name"
            }
            value={keyword}
            onChange={(e) => keywordChange(e.target.value)}
          />
        );
      }}
    </LocaleConsumer>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};
