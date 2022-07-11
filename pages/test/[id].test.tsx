import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import useTeapotiumStore from "../../stores/teapotiumStore";
import ID from "../[id]";

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        route: "/",
        query: { id: 2 },
        push: () => {},
      };
    },
  };
});

const data = {
  teapots: ["http://a.test", "http://b.test", "http://c.test"],
  hotspots: ["http://d.test", "http://e.test", "http://f.test"],
};

beforeEach(() => {
  useTeapotiumStore.setState({ ...data });
});

useTeapotiumStore.setState({ ...data });

describe("[ID]", () => {
  it("renders the correct rotation % on load", () => {
    render(<ID />);

    const subTitle = screen.getByText(
      "A 360MODEL OF MULTIPLE TEAPOTS MELDED INTO ONE: 2% ROTATION"
    );
    expect(subTitle).toBeInTheDocument();
  });

  it("changes the text upon clicking on the left arrow button", async () => {
    render(<ID />);

    const [leftButton] = screen.getAllByRole("button");
    await waitFor(() => fireEvent.mouseEnter(leftButton));
    await waitFor(() =>
      screen.findByText(
        "A 360MODEL OF MULTIPLE TEAPOTS MELDED INTO ONE: 1% ROTATION"
      )
    );

    expect(
      screen.getByText(
        "A 360MODEL OF MULTIPLE TEAPOTS MELDED INTO ONE: 1% ROTATION"
      )
    ).toBeInTheDocument();
  });

  it("changes the text upon clicking on the right arrow button", async () => {
    render(<ID />);

    const [, rightButton] = screen.getAllByRole("button");
    await waitFor(() => fireEvent.mouseEnter(rightButton));
    await waitFor(() =>
      screen.findByText(
        "A 360MODEL OF MULTIPLE TEAPOTS MELDED INTO ONE: 3% ROTATION"
      )
    );

    expect(
      screen.getByText(
        "A 360MODEL OF MULTIPLE TEAPOTS MELDED INTO ONE: 3% ROTATION"
      )
    ).toBeInTheDocument();
  });

  it("changes the img src upon clicking on the left arrow button", async () => {
    render(<ID />);

    const [leftButton] = screen.getAllByRole("button");
    await waitFor(() => fireEvent.mouseEnter(leftButton));
    await waitFor(() => screen.findByText("Frame 2 of 3"));

    expect(screen.getByText("Frame 2 of 3")).toBeInTheDocument();
  });

  it("changes the img src upon clicking on the right arrow button", async () => {
    render(<ID />);

    const [leftButton] = screen.getAllByRole("button");
    await waitFor(() => fireEvent.mouseEnter(leftButton));
    await waitFor(() => screen.findByText("Frame 3 of 3"));

    expect(screen.getByText("Frame 3 of 3")).toBeInTheDocument();
  });
});
