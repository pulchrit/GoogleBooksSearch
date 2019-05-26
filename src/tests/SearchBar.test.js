import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../src/SearchBar';

describe("SearchBar component", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});