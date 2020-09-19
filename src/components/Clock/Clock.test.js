import React from 'react';
import {shallow , configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Clock from './Clock';

configure({adapter:new Adapter()})
it('basic clock test' ,()=>{
    const wrapper = shallow(<Clock/>)
    expect(Clock).toBeDefined();
    expect(wrapper.find('#head').text()).toEqual('Digital Clock');
    expect(wrapper.find('input')).toHaveLength(1);
});

it('display date when toggle button is clicked',()=>{
    const wrapper = shallow(<Clock/>)
    let date=new Date().toLocaleDateString();
    wrapper.find("#toggle").simulate('click')
    expect(wrapper.find('#date').text()).toEqual(date)
    wrapper.find("#toggle").simulate('click')
    expect(wrapper.find('#date').text()).toEqual("")
  })
  