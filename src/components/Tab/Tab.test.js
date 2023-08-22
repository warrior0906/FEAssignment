import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { createStore } from "../../store/store";
import Tab from "./Tab.jsx";

describe("tab component", () => {
  const produceComponent = () =>
    render(
      <Provider store={createStore()}>
        <Tab children={<div/>} />
      </Provider>
    );

  it("render", () => {
    produceComponent();
    // expect(screen.getByText(/Profile/i)).toBeInTheDocument();
  });
});
