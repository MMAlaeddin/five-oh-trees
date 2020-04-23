import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewItemForm(props) {
  function runNewItemFormSubmit(event) {
  event.preventDefault();
  props.createNewItem({name: event.target.name.value, category: event.target.category.value, size: event.target.size.value, quantity: event.target.quantity.value})
}
}