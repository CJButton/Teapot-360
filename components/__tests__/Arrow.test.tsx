import { render, screen } from "@testing-library/react";
import Arrow from "../Arrow";

describe("Arrow", () => {
  it("renders the arrow pointing left", () => {
    render(<Arrow />);

    const arrow = screen.getByRole("img");
    expect(arrow).toHaveAttribute("alt", "Arrow Right");
  });

  it("renders the arrow pointing right", () => {
    render(<Arrow isReversed />);

    const arrow = screen.getByRole("img");
    expect(arrow).toHaveAttribute("alt", "Arrow Left");
  });
});
