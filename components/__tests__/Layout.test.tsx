import { render } from "@testing-library/react";
import useTeapotiumStore from "../../stores/teapotiumStore";
import Layout from "../Layout";

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

beforeEach(() => {
  useTeapotiumStore.setState({ hotspots: [] });
});

const LayoutChild = () => <div>Test Child</div>;

describe("Layout", () => {
  it("renders the img tag when hot spots are available", () => {
    const { container } = render(
      <Layout>
        <LayoutChild />
      </Layout>
    );

    const spinner = container.querySelector("[data-icon='spinner'");
    expect(spinner).toBeInTheDocument();
  });
});
