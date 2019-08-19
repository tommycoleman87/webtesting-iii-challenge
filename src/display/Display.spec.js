// Test away!
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import Display from './Display';

describe('<Display />', () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Display />);

        expect(tree.toJSON()).toMatchSnapshot();
    })

    it('diplay closed if the closed prop is true or open if the closed prop is false', () => {
        const status = {
            closed: true,
        }
        const display = render(<Display closed={status.closed}/>)
        const open = display.getByTestId('isOpen');
        expect(open.innerHTML).toEqual('Closed')
    })

    it('displays locked it the locked prop is true or unlocked if the locked prop is false ', () => {
        const status = {
            locked: true,
        }

        const display = render(<Display closed={status.closed} locked={status.locked}/>)

        const locked = display.getByTestId('isLocked');
        expect(locked.innerHTML).toEqual('Locked')
    })

    it('should have red-led class when locked or closed', () => {
        
    })

    it('should have green-led class when unlocked or open', () => {
        
    })
})