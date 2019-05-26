import React from 'react';
import './css/SearchFilters.css'

class SearchFilters extends React.Component {

    render() {
        return (
            <section className="search-filters">
                <label>
                    Print Type:
                    <select id="print-type" name="print-type">
                        <option value="all">All</option>
                        <option value="books">Books</option>
                        <option value="magazines">Magazines</option>
                    </select>
                </label>

                <label>
                    Book Type:
                    <select id="book-type" name="book-type">
                        <option value="partial">Preview text</option>
                        <option value="full">Full text</option>
                        <option value="free-ebooks">Free eBooks</option>
                        <option value="paid-ebooks">Paid eBooks</option>
                        <option value="ebooks">Free &amp; Paid eBooks</option>
                    </select>
                </label>
            </section>  
        );
    }
}

export default SearchFilters;