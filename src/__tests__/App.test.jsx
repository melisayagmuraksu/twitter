import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";
import Wrapper from "../wrapper";
import userEvent from "@testing-library/user-event";

describe("A truthy statement", () => {
  it("should be equal to 2", () => {
    expect(1 + 1).toEqual(2);
  });
});

describe("App", () => {
  it("renders the App component", () => {
    render(
      <Wrapper>
        <App />
      </Wrapper>,
    );

    //screen.debug(); // prints out the jsx in the App component unto the command line
  });

  it("logins user", async () => {
    //ARRANGE
    render(
      <Wrapper>
        <App />
      </Wrapper>,
    );

    //ACT

    const user = userEvent.setup();
    const usernameElement = screen.getByTestId("usernameInput");
    const passwordElement = screen.getByTestId("passwordInput");
    const submitButton = screen.getByRole("button");

    await user.type(usernameElement, "Yağmur Aksu");
    await user.type(passwordElement, "Password1!");
    await user.click(submitButton);

    //ASSERT
    const tweet = await screen.findByText("Notifications");
    expect(tweet).toBeInTheDocument();
  });
});
