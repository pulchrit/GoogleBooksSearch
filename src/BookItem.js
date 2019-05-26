import React from 'react';
import "./css/BookItem.css";
import BookDetail from "./BookDetail";

class BookItem extends React.Component {

    showMoreButton()
    
    setShowDetails(show, moreOrLess) {
        this.setState({
          showDetails: show,
          showMore: moreOrLess
        });
    }
    
    constructor(props) {
        super(props);
        this.state = {
            showDetails: false,
            showMore: true
        };
    }

    render() {
        const showMoreValue = this.state.showMore;

        return (
            <section className="details-section">
                {this.props.thumbnail && 
                    <img className="cover-img" src={`${this.props.thumbnail}`} alt={`${this.props.title} cover`} />
                }
                <div className="book-info">
                    <h2 className="book-title">{this.props.title}</h2>
                    <p className="book-authors">{`Author(s): ${this.props.authors.join(", ")}`}</p>
                    <p className="price">{`Price: ${this.props.price}`}</p>
                    <p className="book-snippet">{this.props.textSnippet}</p>
                    <button 
                        className="details-button" 
                        type="button"
                        onClick={e => this.state.setShowDetails(!this.state.showDetails, !this.state.showMore)}
                    >
                        {showMoreValue ? 'more' : 'less'}
                    </button>
                    {this.state.showDetails && 
                        <BookDetail 
                            //setShowDetails={show => this.setShowDetails(show)}
                            genre={this.props.genre}
                            publishedDate={this.props.publishedDate}
                            pageCount={this.props.pageCount}
                            description={this.props.description}
                        />}
                </div>
            </section>
        );
    }
}

export default BookItem;