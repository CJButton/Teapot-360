import { render, screen, waitFor } from "@testing-library/react";
import useTeapotiumStore from "../../stores/teapotiumStore";
import Hotspot from "../Hotspot";

const data = {
  hotspots: Array(3).fill("http://test.test"),
};

beforeEach(() => {
  useTeapotiumStore.setState({ ...data });
});

useTeapotiumStore.setState({ ...data });

describe("Hotspot", () => {
  it("renders the img tag when hot spots are available", () => {
    render(<Hotspot />);

    const hotspot = screen.getAllByRole("img");
    expect(hotspot).toHaveLength(3);
  });

  it("does not render if there are no images ready", async () => {
    useTeapotiumStore.setState({ hotspots: [] });
    const { container } = render(<Hotspot />);

    await waitFor(() => {
      expect(container.childElementCount).toEqual(0);
    });
  });
});
