import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CircleDrawer from "./CircleDrawer";
import "@testing-library/jest-dom";

beforeEach(() => {
  // mock the bounding box of the drawing area
  HTMLElement.prototype.getBoundingClientRect = () => ({
    left: 100,
    top: 50,
    width: 600,
    height: 400,
    right: 700,
    bottom: 450,
  });
});

test("draws a circle on click", () => {
  render(<CircleDrawer />);
  const area = screen.getByTestId("drawing-area");

  fireEvent.click(area, {
    clientX: 150,
    clientY: 100,
  });

  const circles = screen.getAllByTestId("circle");
  expect(circles.length).toBe(1);
});

test("undo removes the last circle", () => {
  render(<CircleDrawer />);
  const area = screen.getByTestId("drawing-area");
  const undo = screen.getByText("Undo");

  fireEvent.click(area, { clientX: 150, clientY: 100 });
  fireEvent.click(area, { clientX: 160, clientY: 110 });

  expect(screen.getAllByTestId("circle").length).toBe(2);

  fireEvent.click(undo);
  expect(screen.getAllByTestId("circle").length).toBe(1);
});

test("redo re-adds the last undone circle", () => {
  render(<CircleDrawer />);
  const area = screen.getByTestId("drawing-area");
  const undo = screen.getByText("Undo");
  const redo = screen.getByText("Redo");

  fireEvent.click(area, { clientX: 150, clientY: 100 });
  fireEvent.click(undo);
  expect(screen.queryAllByTestId("circle").length).toBe(0);

  fireEvent.click(redo);
  expect(screen.queryAllByTestId("circle").length).toBe(1);
});
