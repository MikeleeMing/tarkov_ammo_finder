import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./searchbar.styles.css";
const SearchBar = ({ placeholder, handleInput }) => (
<input
className="search"
type="search"
placeholder={placeholder}
onChange={handleInput}
/>
);

export default SearchBar;