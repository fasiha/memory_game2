import {render, screen} from "@testing-library/react"
import TopBar,{Test} from './TopBar'
import userEvent from "@testing-library/user-event";

import React, {useState as useStateMock} from 'react';

describe("App component", () => {
    it("renders correct heading", () => {
      render(<Test />);
      expect(screen.getByRole("heading").textContent).toMatch(/memory/i);
    });

    it("change picture after image click", async ()=>{
        const user = userEvent.setup();
        render(<Test />);
        const image = screen.getByRole('img')
        expect(image.src.split('\\').pop().split('/').pop()).toMatch(/blue2.png/)
        await user.click(image)
        expect(image.src.split('\\').pop().split('/').pop()).toMatch(/astronaut.png/)

    })
  });



//describe("Topbar component",()=>{
//     const {green,ren} = render(<TopBar().render() />)
//     it("renders correct heading", ()=>{
//         render(ren());
//         expect(screen.getByRole("heading").textContent).toMatch(/memory/i);
//     })
// })