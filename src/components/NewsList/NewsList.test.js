import React from "react";
import { shallow } from "enzyme";
import NewsList from "./NewsList";

describe("NewsList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NewsList />);
    expect(wrapper).toMatchSnapshot();
  });
});
