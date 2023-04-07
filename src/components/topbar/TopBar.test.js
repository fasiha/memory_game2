import {render, screen} from "@testing-library/react"
import TopBar from './TopBar'
import React, {useState as useStateMock} from 'react';



describe("Topbar component",()=>{
    const {render,green} = TopBar()
    it("renders correct heading", ()=>{
        render(render);
        expect(screen.getByRole("heading").textContent).toMatch(/memory/i);
    })
})