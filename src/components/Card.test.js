import { shallow } from "enzyme";
import React from "react";
import Card from "./Card";
import toJson from "enzyme-to-json";

it("expect to run card componen", () => {
  expect(shallow(<Card />).length).toEqual(1);
});

it("expect to run card componen", () => {
  const wrapper = shallow(<Card />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
