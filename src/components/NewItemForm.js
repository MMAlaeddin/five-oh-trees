import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewItemForm(props) {
  function runNewItemFormSubmit(event) {
  event.preventDefault();
  props.createNewItem({name: event.target.name.value, category: event.target.category.value, size: event.target.size.value, quantity: event.target.quantity.value, id: v4()});
}

NewItemForm.propTypes = {
  createNewItem: PropTypes.func
};

return (
  <React.Fragment>
    <ReusableForm
    formSubmissionHandler={runNewItemFormSubmit}
    buttonText="Help!" />
  </React.Fragment>
)
}

export default NewItemForm;