import { render, screen } from "@testing-library/react";
import useTeapotiumStore from "../../stores/teapotiumStore";
import Card from "../Card";

const data = {
  teapots: Array(3).fill("http://test.test"),
  name: "Kiryu",
};

beforeEach(() => {
  useTeapotiumStore.setState({ ...data });
});

useTeapotiumStore.setState({ ...data });

describe("Card", () => {
  it("renders the % of the rotation", () => {
    render(<Card frameNumber={0} />);
    const card = screen.getByText(/1% Rotation/);
    expect(card).toBeInTheDocument();
  });

  it("renders the frame number", () => {
    render(<Card frameNumber={2} />);

    const card = screen.getByText(/Frame 3 of 3/);
    expect(card).toBeInTheDocument();
  });

  it("renders the name of the product", () => {
    render(<Card frameNumber={2} />);
    const card = screen.getByText(/Kiryu/);
    expect(card).toBeInTheDocument();
  });
});
