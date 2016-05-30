import TestUtils from 'react-addons-test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../app/components/search';

describe('Search', function () {
    let root, rootElem;
    beforeEach(function () {
        root = TestUtils.renderIntoDocument(<Search/>);
        rootElem = ReactDOM.findDOMNode(root);
    });
    it('renders without problems', function () {
        expect(root).toBeDefined();
    });
    it('renders with one input', function () {
        let inputs = rootElem.querySelectorAll('input');
        expect(inputs.length).toEqual(1);
    });
});
