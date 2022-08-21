import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const Form = () => (
  <form className="form">
    <input
      required={true}
      className="form__input"
      type="text"
      name="name"
      placeholder="name"
    />
    <input
      required={true}
      className="form__input"
      type="text"
      placeholder="surname"
      name="surname"
    />
    <input
      required={true}
      className="form__input"
      type="email"
      name="email"
      placeholder="email"
    />
    <input
      required={true}
      className="form__input"
      type="date"
      name="birthday"
    />
    <button className="form__button" type="submit">
      Save
    </button>
  </form>
);

Form.propTypes = {};

Form.defaultProps = {};

export default Form;
