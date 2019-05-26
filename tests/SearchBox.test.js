import React from 'react';
import ReactDOM from 'react-dom';
import SearchBox from '../src/SearchBox';

describe("SearchBox component", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchBox />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});