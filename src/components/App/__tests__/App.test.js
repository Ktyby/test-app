import renderer from "react-test-renderer";
import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import App from "../App";

const mockStore = configureMockStore();

describe("components => App", () => {
  const store = mockStore({
    users: [],
  });

  it("should render App component", () => {
    const component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
