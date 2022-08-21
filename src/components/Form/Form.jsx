import React from "react";

const Form = () => {
  return (
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
};

export default Form;
