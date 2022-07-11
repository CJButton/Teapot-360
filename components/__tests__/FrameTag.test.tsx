import { render, screen } from "@testing-library/react";
import FrameTag from "../FrameTag";

describe("FrameTag", () => {
  it("renders the frame number and total frames", () => {
    render(<FrameTag frameNumber={7} totalFrames={21} />);

    expect(screen.getByText(/Frame 7 of 21/)).toBeInTheDocument();
  });
});
