import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "/Users/dele/Documents/Programming/odin-project-repos/ShoppingCart/src/components/HomePage/HomePage.jsx"

describe("App component", () => {
  it("renders correct heading", () => {
    render(<HomePage />);
    // using regex with the i flag allows simpler case-insensitive comparison
    expect(screen.getByRole("heading").textContent).toMatch(/Welcome to Costcutters/i);
  });
});