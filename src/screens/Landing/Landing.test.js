import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { createStore } from "../../store/store";
import Landing from "./Landing-screen.jsx";

jest.mock("../../components", () => ({
  __esModule: true,
  User: () => <></>,
}));

global.fetch = jest.fn(() => Promise.resolve());

describe("Landing screen", () => {
  const produceComponent = () =>
    render(
      <Provider store={createStore()}>
        <Landing />
      </Provider>
    );

  it("renders Select an account heading", () => {
    produceComponent();
    const linkElement = screen.getByText(/Select an account/i);
    expect(linkElement).toBeInTheDocument();
  });
});
