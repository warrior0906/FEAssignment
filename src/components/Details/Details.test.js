import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { createStore } from "../../store/store";
import User from "./User.jsx";


describe("user component", () => {
  const produceComponent = () =>
    render(
      <Provider store={createStore()}>
        <User name="John Doe" />
      </Provider>
    );

  it("render name", () => {
    produceComponent();
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
  });
});
