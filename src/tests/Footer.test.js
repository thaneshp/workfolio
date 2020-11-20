import React from 'react';
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { render, screen } from '@testing-library/react';
import Footer from '../components/footer';
import fb_logo from '../assets/facebook.png';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";

configure({ adapter: new Adapter() })

test('Match footer render with snapshot without component', () => {
    const footerSnapshotComponent = shallow(<Router><Footer /><div /></Router>);
    expect(footerSnapshotComponent).toMatchSnapshot();
});

test('Match footer render with snapshot with component', () => {
   const props = {
           component: () => {}
        }
    const FooterSnapshotComponent = shallow(<Router><Footer {...props}/><div /></Router>);
    expect(FooterSnapshotComponent).toMatchSnapshot();
});

test('Check if text WORKFOLIO is rendered successfully', () => {
  render(<Router><Footer /></Router>);
  expect(screen.getByText('WORKFOLIO')).toBeInTheDocument();
});

test('Check if subscribe now text is rendered successfully', () => {
  const { getByText } = render(<Router><Footer/></ Router>);
  const linkElement = getByText("Subscribe Now:");
  expect(linkElement).toBeInTheDocument();
});

test('Check sample text that is not supposed to be rendered is not rendered', () => {
  render(<Router><Footer /></Router>);
  expect(screen.queryByText('TestWORKFOLIO')).not.toBeInTheDocument();
});

test("Check that fb logo is rendered", () => {
    const fblogo = shallow(<img className="Social-Icon" src={fb_logo} alt="fb" />);
    expect(fblogo.find("img").props().src).toEqual(fb_logo);
});

test("Check that logo rendered is not null", () => {
     const fblogo = shallow(<img className="Social-Icon" src={fb_logo} alt="fb" />);
     expect(fblogo.find("img").props().src).not.toEqual(null);
});

<input type='text'>

test('Check that email box is found on component', () => {
    const FooterComponent = mount(<Router><Footer /></Router>);
    const footerInput = FooterComponent.find("input[type='text']");
});

 {/* test('Check that email box is able to change state after receiving input', () => {
    const component = shallow(<Footer email={'testuser@yahoo.com'} />);
    component.find(Footer).simulate('change', { target: { value: 'testuser@yahoo.com' } });
    const footer = component.find(Footer);
    expect(footer.prop('email')).not.toBe('testuser1@yahoo.com');
    expect(footer.prop('email')).toBe('testuser@yahoo.com');
}); */}
