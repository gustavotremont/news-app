import React from "react";
import { shallow } from "enzyme";
import NewsCard from "./NewsCard";

describe("NewsCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NewsCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
