
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Lorem from "./lorem";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with lorem ipsum string", () => {
  act(() => {
    render(<Lorem />, container);
  });
  expect(container.textContent).toEqual(expect.stringContaining('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'));

  act(() => {
    render(<Lorem />, container);
  });
  expect(container.textContent).toEqual(expect.stringContaining('eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad'));

  act(() => {
    render(<Lorem />, container);
  });
  expect(container.textContent).toEqual(expect.stringContaining('culpa qui officia deserunt mollit anim id est laborum.'));
});
