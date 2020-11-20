import React from 'react';
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { render, screen, fireEvent } from '@testing-library/react';
import Slider from '../components/slider';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";

configure({ adapter: new Adapter() })

test('renders Slider', () => {
    const props = {
        component: () => {}
    }
    const slider = shallow(<Slider {...props}/>);

    let buttons = slider.find('Button');
    expect(buttons.length).toEqual(0)
});
