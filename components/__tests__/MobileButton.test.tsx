import { render, screen } from "@testing-library/react";
import MobileButton from "../MobileButton";

const noop = () => {};

describe("MobileButton", () => {
  it("renders sidear text", () => {
    render(<MobileButton setIsSidebarOpen={noop} />);
    expect(screen.getByText("Open sidebar")).toBeInTheDocument();
  });
});
