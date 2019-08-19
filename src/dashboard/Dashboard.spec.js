// Test away
import React from "react";
import renderer from "react-test-renderer"; // 1: install this npm module as a dev dependency
import Dashboard from "./Dashboard";

describe('<Dashboard />', () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Dashboard />);

        expect(tree.toJSON()).toMatchSnapshot();
    })
})