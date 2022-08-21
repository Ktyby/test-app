import renderer from "react-test-renderer";
import React from "react";

import ConfirmationModal from "../ConfirmationModal";

describe("components => ConfirmationModal", () => {
  it("should render ConfirmationModal component", () => {
    const component = renderer.create(<ConfirmationModal />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
