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
        expect(lockBtn.textContent).toBe('Lock Gate');
        fireEvent.click(openBtn);
        expect(openBtn.textContent).toBe('Open Gate');
        expect(lockBtn.textContent).toBe('Lock Gate');
        fireEvent.click(lockBtn)
        expect(lockBtn.textContent).toBe('Unlock Gate');
    })

    it('should disable open button when gate is locked', () => {
        const dashboard = render(<Dashboard />)
        const openBtn = dashboard.getByTestId('openBtn');
        const lockBtn = dashboard.getByTestId('lockBtn');
        expect(openBtn.textContent).toBe('Close Gate');
        fireEvent.click(openBtn);
        expect(openBtn.textContent).toBe('Open Gate');
        fireEvent.click(openBtn);
        expect(openBtn.textContent).toBe('Close Gate');
        fireEvent.click(openBtn);
        expect(openBtn.textContent).toBe('Open Gate');
        fireEvent.click(lockBtn);
        fireEvent.click(openBtn);
        expect(openBtn.textContent).toBe('Open Gate');
    })

    it('should disable lock button when gate is open', () => {
        const dashboard = render(<Dashboard />)
        const openBtn = dashboard.getByTestId('openBtn');
        const lockBtn = dashboard.getByTestId('lockBtn');
        expect(openBtn.textContent).toBe('Close Gate');
        fireEvent.click(openBtn);
        expect(openBtn.textContent).toBe('Open Gate');
        expect(lockBtn.textContent).toBe('Lock Gate');
        fireEvent.click(lockBtn);
        expect(lockBtn.textContent).toBe('Unlock Gate');
        fireEvent.click(lockBtn);
        expect(lockBtn.textContent).toBe('Lock Gate');
        fireEvent.click(openBtn);
        expect(openBtn.textContent).toBe('Close Gate');
        fireEvent.click(lockBtn);
        expect(lockBtn.textContent).toBe('Lock Gate');
    })
})