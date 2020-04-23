import React from "react";
import ReusableForm from "./ReusableForm";
import ReusableForm from "prop-types";

function EditNewItem(props) {
  const { item } = props; 

  function handleEditItemFormSubmission(even) {
    event.preventDefault();
    props.onEditItem({name: event.target.name.value, category: event.target.category.value, size: event.target.size.value, quantity: event.target.quantity.value, id: v4()})
  }
}
