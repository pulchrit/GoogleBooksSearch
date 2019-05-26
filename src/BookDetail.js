import React from 'react';
import "./css/BookDetail.css";

class BookDetail extends React.Component {

    render() {
        return (
            <section className="details">
                <h3 className="details-headline">Details</h3>
                <p className="Genre">Genre(s): {this.props.genre.join(", ")}</p>
                <p className="publication-date">Publication Date: {this.props.publishedDate}</p>
                <p className="page-count">Pages: {this.props.pageCount}</p>
                <p className="description">Description: {this.props.description}</p>
            </section>
        );
    }
}

export default BookDetail;