import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function EditItemForm(props) {
  const { item } = props; 

  function handleEditItemFormSubmission(event) {
    event.preventDefault();
    props.onEditItem({name: event.target.name.value, category: event.target.category.value, size: event.target.size.value, quantity: event.target.quantity.value, id: v4()})
  }

  // a user should be able to access the edit form and return to the main page
  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleEditItemFormSubmission}
      buttonText="Update Item" />
    </React.Fragment>
  );
}

EditItemForm.propTypes = {
  onEditItem: PropTypes.func
};

export default EditItemForm;