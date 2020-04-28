import { shallow } from "enzyme";
import React from "react";
import CounterButton from "./CounterButton";
import toJson from "enzyme-to-json";

it("expect to run CounterButton componen", () => {
  const mockColor = "red";
  const wrapper = shallow(<CounterButton color={mockColor} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it("is correct increment function", () => {
  const mockColor = "red";
  const wrapper = shallow(<CounterButton color={mockColor} />);

  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 1 });
  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 2 });
  expect(wrapper.props().color).toEqual("red");
});
