import { render, screen } from "@testing-library/react";
import DesktopSidebar from "../DesktopSidebar";

describe("DesktopSidebar", () => {
  it("renders the corect text", () => {
    render(<DesktopSidebar />);
    const text = screen.getByText(
      /A 360 model of multiple teapots melded into one/
    );
    expect(text).toBeInTheDocument();
  });
});
