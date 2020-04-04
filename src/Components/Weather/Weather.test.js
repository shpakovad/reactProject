
import React from "react";
import { shallow, mount } from "enzyme";
import Weather from "./Weather";
import TestRenderer, { act, create } from 'react-test-renderer';
import gettingWeather from './Weather'


describe("Weather Component", () => {
    it("renders", () => {
        shallow(<Weather />);
    });
    it("displays initial form", () => {
        const wrapper = mount(<Weather />);
        expect(wrapper.find("form")).toHaveLength(0);
    });

});
