
import React from "react";
import { shallow, mount } from "enzyme";
import Weather from "./Weather";


describe("Weather Component", () => {
    it("renders", () => {
        shallow(<Weather />);
    });
    it("displays initial form", () => {
        const wrapper = mount(<Weather />);
        expect(wrapper.find("form")).toHaveLength(1);
    });
});
