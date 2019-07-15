import React from 'react';
import {shallow} from 'enzyme';
import TestComponent from './TestComponent';
describe('this is a test', () => {
    let component;
    beforeAll(() => {
        component = shallow(<TestComponent/>);

    });
    it('should render', () => {
        expect(component.find('.test').text()).toEqual('This is a test');
    });


});