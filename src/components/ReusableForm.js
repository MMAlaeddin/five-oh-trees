import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
        type="text"
        name="name"
        placeholder="Name of item" />
        <input 
        type="text"
        name="category"
        placeholder="Category of item" />
        <input
        type="text"
        name="size"
        placeholder="Sizes" />
        <input
        type="text"
        name="quantity"
        placeholder="How many you got?" />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;