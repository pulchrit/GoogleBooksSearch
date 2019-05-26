import React from 'react';
import "./css/SearchBar.css";

class SearchBar extends React.Component { 

    render() {
        return (
            <form id="search-form" onSubmit={e => this.props.handleSubmit(e)}>
                <section className="search-row">
                    <label htmlFor="search-term" className="search-label">
                        Search:
                        <input 
                            type="text" 
                            id="search-term" 
                            name="search-term" 
                            className="search-term" 
                            placeholder="enter search term"
                            value={this.props.searchTerm}
                            onChange={e => this.props.handleUpdateSearchTermEntered(e.target.value)}
                        >
                        </input>
                        <button type="submit">Search</button>
                    </label>
                </section>
                
                <section className="search-filters">
                    <label>
                        Print Type:
                        <select 
                            id="print-type" 
                            name="print-type"
                            value={this.props.filterPrintType} 
                            onChange={(e) => {this.props.handleUpdatePrintTypeSelected(e.target.value)}}
                        >
                            <option value='none'>None</option>
                            <option value="all">All</option>
                            <option value="books">Books</option>
                            <option value="magazines">Magazines</option>
                        </select>
                    </label>

                    <label>
                        Book Type:
                        <select 
                            id="book-type" 
                            name="book-type"
                            value={this.props.filterBookType} 
                            onChange={(e) => {this.props.handleUpdateBookTypeSelected(e.target.value)}}
                        >
                            <option value='none'>None</option>
                            <option value="partial">Preview text</option>
                            <option value="full">Full text</option>
                            <option value="free-ebooks">Free eBooks</option>
                            <option value="paid-ebooks">Paid eBooks</option>
                            <option value="ebooks">Free &amp; Paid eBooks</option>
                        </select>
                    </label>
                </section>  
            </form>
        );
    }
}

export default SearchBar;