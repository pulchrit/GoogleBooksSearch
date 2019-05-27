import React from 'react';
import './css/App.css';
import SearchBar from './SearchBar';
import BookList from './BookList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      results: {},
      searchTermEntered: "none",
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

  // Only build params if a value was entered or selected in the form. So, if user 
  // doesn't select a filter option, we aren't going to include any filters in our API url.
  buildParams(params) {
    const queryParams = Object.keys(params).map(key => {
        //params[key] !== "none" ? `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`; 
      //return params[key] !== "none" &&  `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
      //return params[key] && `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
       if (params[key] !== "none") {
        return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
      }   
    });
    console.log(queryParams.join("&"));
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
    console.log("This is the callURL: ", `${baseURL}${this.buildParams(params)}`);
    return `${baseURL}${this.buildParams(params)}`;
  }

  handleErrors(response) {
    if (!response.ok) {
      throw new Error("Something went wrong:");
    }
    //console.log("this is the response:", response.text());
    return response.json();
  } 

  handle404Errors(responseJSON) {
    if (responseJSON.totalItems === 0) {
      throw new Error("No items were found.")
    }
    return responseJSON;
  }

  //componentDidMount() {
  handleSubmit(e) {

    e.preventDefault();
    fetch(this.buildURL())
    .then(this.handleErrors)
    .then(this.handle404Errors)
    //.then(response => console.log(response))
    .then(data => {
      console.log("this is the data:", data);
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

  // Attribution: https://coderwall.com/p/_g3x9q/how-to-check-if-javascript-object-is-empty
  isEmpty(results) {
    for(var key in results) {
      if(results.hasOwnProperty(key))
          return false;
    }
    return true;
  }
 
  render() {

    // Display placeholder content until search term is entered and results returned. 
    const mainContent = this.isEmpty(this.state.results)
                        ? <div className="placeholder-text">Enter a search term above</div>
                        : <BookList results={this.state.results}/>;
                         

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
