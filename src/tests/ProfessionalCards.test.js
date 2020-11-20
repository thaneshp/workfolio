import React from 'react';
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { screen } from '@testing-library/react';
import ProfileCard from '../components/profileCard';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from "react-dom";

configure({ adapter: new Adapter() })

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

test('Match Profile Card render with snapshot without component', () => {
    const ProfileCardSnapshotComponent = shallow(<ProfileCard />);
    expect(ProfileCardSnapshotComponent).toMatchSnapshot();
});

test('Match Profile Card render with snapshot with component', () => {
   const props = {
           component: () => {}
        }
    const ProfileCardSnapshotComponent = shallow(<ProfileCard {...props}/>);
    expect(ProfileCardSnapshotComponent).toMatchSnapshot();
});

describe("Test suite for possible card user inputs", () => {
  const user = {
    name: "TestUser",
    occupation: "Student"
};

  test("Check if user object in wrapper is equal to the existing user object", () => {
      const wrapper = mount(<ProfileCard user={user} />);
      expect(wrapper.props().user).toEqual(user);
  });

  test("Check if user name in wrapper is equal to the existing user name", () => {
      const wrapper = mount(<ProfileCard user={user} />);
      expect(wrapper.props().user.name).toEqual("TestUser");
  });

  test("Check if user occupation in wrapper is equal to the existing user occupation", () => {
      const wrapper = mount(<ProfileCard user={user} />);
      expect(wrapper.props().user.occupation).toEqual("Student");
  });

  test("Check if user name in wrapper is not equal to a non-existing occupation", () => {
      const wrapper = mount(<ProfileCard user={user} />);
      expect(wrapper.props().user.occupation).not.toEqual("NewStudent");
  });
});

it('Check if card background components are rendered successfully', () => {
    const ProfileCardComponent = mount(<ProfileCard />);
    const ProfileCardInput1 = ProfileCardComponent.find("svg-background");
    const ProfileCardInput2 = ProfileCardComponent.find("svg-background2");
});
