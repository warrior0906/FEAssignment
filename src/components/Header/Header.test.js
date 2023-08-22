import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { createStore } from "../../store/store";
import Header from "./Header.jsx";

jest.mock("../../components", () => ({
  __esModule: true,
  User: () => <></>,
}));

describe("header component", () => {
  const produceComponent = () =>
    render(
      <Provider store={createStore()}>
        <Header title="Profile" />
      </Provider>
    );

  it("render title", () => {
    produceComponent();
    expect(screen.getByText(/Profile/i)).toBeInTheDocument();
  });
});
