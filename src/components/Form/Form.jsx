import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const Form = ({ userData, onSubmit }) => (
  <form className="form" onSubmit={onSubmit}>
    <input
      required={true}
      className="form__input"
      type="text"
      name="name"
      placeholder="name"
      defaultValue={userData && userData.name}
      pattern={"^[A-Za-z]+$"}
      title="You can use only latin letters for the name"
    />
    <input
      required={true}
      className="form__input"
      type="text"
      placeholder="surname"
      name="surname"
      pattern={"^[A-Za-z]+$"}
      title="You can use only latin letters for the surname"
      defaultValue={userData && userData.surname}
    />
    <input
      required={true}
      className="form__input"
      type="email"
      name="email"
      placeholder="email"
      defaultValue={userData && userData.email}
    />
    <input
      required={true}
      className="form__input"
      type="date"
      name="birthday"
      defaultValue={userData && userData.birthday}
    />
    <button className="form__button" type="submit">
      Save
    </button>
  </form>
);

Form.propTypes = {
  userData: PropTypes.object,
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  userData: {},
  onSubmit: () => {},
};

export default Form;
