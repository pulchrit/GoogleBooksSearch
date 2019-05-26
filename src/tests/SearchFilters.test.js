import React from 'react';
import ReactDOM from 'react-dom';
import SearchFilers from '../src/SearchFilters';

describe("SearchFilters component", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchFilters />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});