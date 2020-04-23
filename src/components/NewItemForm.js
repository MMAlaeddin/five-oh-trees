import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewItemForm(props) {
  function handleNewItemFormSubmission(event) {
  event.preventDefault();
  props.onNewItemCreation({name: event.target.name.value, category: event.target.category.value, size: event.target.size.value, quantity: event.target.quantity.value, id: v4()});
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

return (
  <React.Fragment>
    <ReusableForm
    formSubmissionHandler={handleNewItemFormSubmission}
    buttonText="Help!" />
  </React.Fragment>
)
}

export default NewItemForm;