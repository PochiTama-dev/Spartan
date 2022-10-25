import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const SearchBar = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="search-container">
      <input
        className="search-field"
        type="text"
        name="search"
        placeholder="buscar usuarios"
      />
      <button 
        className="search-button" 
        type="submit"
        onClick={ handleSubmit }
      >
        <FontAwesomeIcon className="search-icon" icon={faSearch} />
      </button>
    </form>
  );
};
