import { render, screen } from "@testing-library/react";
import useTeapotiumStore from "../../stores/teapotiumStore";
import RotationList from "../RotationList";

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        route: "/",
        query: { id: 3 },
      };
    },
  };
});

const data = {
  frames: Array(3).fill({ uri: "test" }),
  teapots: Array(3).fill("http://test.co.jp"),
  name: "Rotation List Test",
};

beforeEach(() => {
  useTeapotiumStore.setState({ ...data });
});

describe("RotationList", () => {
  it("should have the name appear for each teapot image card", () => {
    render(<RotationList />);

    const names = screen.getAllByText("Rotation List Test");

    expect(names).toHaveLength(3);
  });

  it("should render each frame rotation percentage", () => {
    render(<RotationList />);

    expect(screen.getByText(/1% Rotation/)).toBeInTheDocument();
    expect(screen.getByText(/2% Rotation/)).toBeInTheDocument();
    expect(screen.getByText(/3% Rotation/)).toBeInTheDocument();
  });

  it("should render each frame number out of the total", () => {
    render(<RotationList />);

    expect(screen.getByText(/Frame 1 of 3/)).toBeInTheDocument();
    expect(screen.getByText(/Frame 2 of 3/)).toBeInTheDocument();
    expect(screen.getByText(/Frame 3 of 3/)).toBeInTheDocument();
  });
});
