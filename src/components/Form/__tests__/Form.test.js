import renderer from "react-test-renderer";
import React from "react";

import Form from "../Form";

describe("components => Form", () => {
  it("should render Form component", () => {
    const component = renderer.create(<Form />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
