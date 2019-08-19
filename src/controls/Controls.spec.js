// Test away!
import React from "react";
import renderer from "react-test-renderer"; // 1: install this npm module as a dev dependency
import Controls from "./Controls";
import { render, fireEvent } from "@testing-library/react";
import Dashboard from '../dashboard/Dashboard';

describe('<Controls />', () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Controls />);

        expect(tree.toJSON()).toMatchSnapshot();
    })

    it("displays buttons to toggle closed and locked", () => {
        const controls = render(<Controls />);
        const lockedBtn = controls.getByTestId("lockBtn");
        const openBtn = controls.getByTestId("openBtn");
    
        expect(lockedBtn).toBeTruthy();
        expect(openBtn).toBeTruthy();
      });

    it('should toggle between closed and locked states', () => {
   
        const dashboard = render(<Dashboard />)
        const openBtn = dashboard.getByTestId('openBtn');
        const lockBtn = dashboard.getByTestId('lockBtn');
        expect(openBtn.textContent).toBe('Close Gate');
        expect(lockBtn.textContent).toBe('Unlock Gate')
        fireEvent.click(openBtn);
        expect(openBtn.textContent).toBe('Open Gate');



    })
})