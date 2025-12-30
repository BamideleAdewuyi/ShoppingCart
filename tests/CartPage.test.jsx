import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import AllPages from "/Users/dele/Documents/Programming/odin-project-repos/ShoppingCart/src/components/AllPages/AllPages.jsx"

describe("App component", () => {
  it("renders correct heading", () => {
    render(<AllPages />);
    expect(screen.getByRole("heading").textContent).toMatch(/Welcome to Costcutters/i);
  });
});