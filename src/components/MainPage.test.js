import { shallow } from "enzyme";
import React from "react";
import MainPage from "./MainPage";
import toJson from "enzyme-to-json";

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it("renders mainpage without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

it("filters robots correctly", () => {
  const mockProp2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "John",
        email: "john@gmail.com",
      },
    ],
    searchField: "John",
    isPending: false,
  };
  const wrapper2 = shallow(<MainPage {...mockProp2} />);
  expect(wrapper2.instance().filteredRobots()).toEqual([
    {
      id: 3,
      name: "John",
      email: "john@gmail.com",
    },
  ]);
});
//you can install redux-mock-store package to mock stores
