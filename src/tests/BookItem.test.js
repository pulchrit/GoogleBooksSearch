import React from 'react';
import ReactDOM from 'react-dom';
import BookItem from "../src/BooktItem";

describe("BookItem component", () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BookItem />);
        ReactDOM.unmountComponentAtNode(div);
    });
});