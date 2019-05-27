import React from 'react';
import "./css/BookItem.css";
import BookItem from "./BookItem";

class BookList extends React.Component {

    render() {
        const books = this.props.results.items.map( (book) => {
            
            const thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : false;
            const price = book.saleInfo.saleability === "FOR_SALE" 
                            ? `$ ${book.saleInfo.listPrice.amount.toFixed(2)}` 
                            : "Not available to purchase"; 
            const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "No authors listed";
            
            return <BookItem 
                key={book.id}
                id={book.id}
                title={book.volumeInfo.title}
                authors={authors}
                price={price}
                thumbnail={thumbnail}
                textSnippet={book.searchInfo.textSnippet}
                genre={book.volumeInfo.categories}
                publishedDate={book.volumeInfo.publishedDate}
                pageCount={book.volumeInfo.pageCount}
                description={book.volumeInfo.description}
            />;
        });

        return (
            <section className="books-list">
                {books}
            </section>
        );
    }
}

export default BookList;
