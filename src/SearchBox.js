import React from 'react';
import "./css/SearchBox.css";

class SearchBox extends React.Component {

    render() {
        return (
            <section className="search-row">
                <label htmlFor="search-term" className="search-label">
                    Search:
                    <input 
                        type="text" 
                        id="search-term" 
                        name="search-term" 
                        className="search-term" 
                        placeholder="enter search term"
                        //value="star wars"
                    >
                    </input>
                    <button type="submit">Search</button>
                </label>
            </section>
        );
    }
}

export default SearchBox;