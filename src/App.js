import React from 'react';
import './css/App.css';
import SearchBar from './SearchBar';
import BookList from './BookList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      results: {},
      searchTermEntered: "Please enter a search word",
      printTypeSelected: "none",
      bookTypeSelected: "none"
    };
  }

  handleUpdateSearchTermEntered(searchTerm) {
    this.setState({
      searchTermEntered: searchTerm
    });
  }

  handleUpdatePrintTypeSelected(printTypeValue) {
    this.setState({
      printTypeSelected: printTypeValue
    });
  }

  handleUpdateBookTypeSelected(bookTypeValue) {
    this.setState({
      bookTypeSelected: bookTypeValue
    });
  }


  buildParams(params) {
    const queryParams = Object.keys(params).map(key => {
      if (params[key] !== "none") {
        return `${encodeURIComponent(key)}=${encodeURLComponent(params[key])}`
      } 
    });
    return queryParams.join("&");
  }

  buildURL() {
    const baseURL = "https://www.googleapis.com/books/v1/volumes?";

    const params = {
      q: this.state.searchTermEntered,
      key: "AIzaSyDXszPBavMCx5GQAVTlT-26t7k9hNK4gUA",
      printType: this.state.printTypeSelected,
      filter: this.state.bookTypeSelected
    };

    return `${baseURL}${buildParams(params)}`;
  }

  handleErrors(response) {
    if (!response.ok) {
      throw new Error("Something went wrong:");
    }
    return response.json();
  }

  //componentDidMount() {
  handleSubmit(e) {

    e.preventDefault();
    fetch(buildURL)
    .then(handleErrors)
    .then(data => {
      this.setState({
        results: data,
        error: null
      });
    })
    .catch(error => {
      this.setState({
        error: error.message
      });
    });

  }
  
  render() {

    // Display placeholder content until search term is entered and results returned. 
    const mainContent = this.state.results 
                        ? <BookList results={this.state.results}/>
                        : <div className="placeholder-text">Enter a search term above</div>;

    // If there is an error, display it, otherwise display an empty string.
    const error = this.state.error
                  ? <div className="error">{this.state.error}</div>
                  : "";
    
    return (
      <>
        <header className="App-header">
          <h1>Google Book Search</h1>
          <SearchBar 
            searchTerm={this.state.searchTermEntered}
            filterPrintType={this.state.printTypeSelected}
            filterBookType={this.state.bookTypeSelected}
            handleSubmit={e => this.handleSubmit(e)}
            handleUpdateSearchTermEntered={searchTerm => this.handleUpdateSearchTermEntered(searchTerm)}
            handleUpdatePrintTypeSelected={printTypeValue => this.handleUpdatePrintTypeSelected(printTypeValue)}
            handleUpdateBookTypeSelected={bookTypeValue => this.handleUpdateBookTypeSelected(bookTypeValue)}
          />
        </header>

        <main className="App">
          {error}
          {mainContent}
        </main>
      </>
    );
  }
}
  


export default App;
