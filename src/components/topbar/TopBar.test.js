import { render, screen, fireEvent } from "@testing-library/react";
import TopBar from "./TopBar";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "../../App";
import React, { useState as useStateMock } from "react";

describe("App component", () => {
  it("should render the logo and links", () => {
    render(
      <MemoryRouter>
        <TopBar />
      </MemoryRouter>
    );
    const logo = screen.getByText(/memory/i);
    expect(logo).toBeInTheDocument();

    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toBeInTheDocument();

    const aboutLink = screen.getByRole("link", { name: /about/i });
    expect(aboutLink).toBeInTheDocument();
  });

  it("should toggle the card image after each click", () => {
    // mocking green,setGreen

    render(
      <MemoryRouter>
        <TopBar green={green} setGreen={setGreen} />
      </MemoryRouter>
    );
    const user = userEvent.setup();
    const image = screen.getByRole("img");
    expect(image.src.split("\\").pop().split("/").pop()).toMatch(/blue2.png/);
    user.click(image);
    screen.debug();
    expect(image.src.split("\\").pop().split("/").pop()).toMatch(
      /astronaut.png/
    );
  });

  it("should navigate to the about page when the link is clicked", () => {
    const navigate = jest.fn();
    const mockUseNavigate = jest.fn(() => navigate);

    render(
      <MemoryRouter>
        <TopBar useNavigate={mockUseNavigate} />
      </MemoryRouter>
    );

    const aboutLink = screen.getByRole("link", { name: /about/i });

    fireEvent.click(aboutLink);

    expect(navigate).toHaveBeenCalledWith("/about");
  });
});
