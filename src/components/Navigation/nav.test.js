import React from 'react';
import {shallow , configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Nav from './nav';
configure({adapter:new Adapter()})
it('basic tests for navigation bar',()=>{
    const wrapper = shallow(<Nav/>)
    expect(Nav).toBeDefined();
    expect(wrapper.find('#Home').text()).toEqual('Home');
    expect(wrapper.find('#Projects').text()).toEqual('Projects');
    expect(wrapper.find('#Services').text()).toEqual('Services');
    expect(wrapper.find('#Contacts').text()).toEqual('Contacts');
})

it('test for route component',()=>{
    const wrapper = shallow(<Nav/>)
    expect(wrapper.find('Route')).toHaveLength(4);
})