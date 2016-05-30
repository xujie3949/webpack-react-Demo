import TestUtils from 'react-addons-test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import Plist from '../app/components/plist';

describe('Plist', function () {
    let root, rootElem;
    beforeEach(function () {
        root = TestUtils.renderIntoDocument(<Plist/>);
        rootElem = ReactDOM.findDOMNode(root);
    });
    it('renders without problems', function () {
        expect(root).toBeDefined();
    });
    it('first renders with a headline', function () {
        let html = rootElem.innerHTML;
        expect(html).toEqual('Enter name to search');
    });
    it('testing props change', function () {
        root = TestUtils.renderIntoDocument(<Plist keyword="viking"/>);
        let newElem = ReactDOM.findDOMNode(root);
        console.log(root.state);
        expect(newElem).toBeDefined();
    });
});
