import React, {useState} from "react";

const SearchBar = ({getSearchText}) => {
    const [searchText, setSearchText] = useState('');

    const submitSearchBar = (event) => {
        event.preventDefault();
        getSearchText(searchText);
    };

    return (
        <div className="ui segment search-bar">
            <form className="ui form " onSubmit={submitSearchBar}>
                <div className="field">
                    <label>Search best videos:</label>
                    <input type="text" placeholder="Search..."
                           onChange={event => {
                               setSearchText(event.target.value)
                           }}
                           value={searchText}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;