import renderer from "react-test-renderer";
import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import UserField from "../UserField";

const mockStore = configureMockStore();

describe("components => UserField", () => {
  const store = mockStore({
    users: [],
  });

  const component = renderer.create(
    <Provider store={store}>
      <UserField
        user={{
          name: "Max",
          surname: "Verstappen",
          birthday: "2022-08-07",
          email: "max.verstappen@gmail.com",
          id: "some id string",
        }}
      />
    </Provider>
  );

  it("should render UserField component", () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
