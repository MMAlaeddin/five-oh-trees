import React from "react";
import PropTypes from "prop-types";

function Item(){
  const item = "Skinny Jeans";
  const item2 = "T-Shirts";
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTicketClicked(props.id)}>
      <h3>{props.name}</h3>
      <h5>{props.category}</h5>
      <h5>{props.size}</h5>
      <h5>{props.quantity}</h5>
      </div>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  quantity: PropTypes.int
};

export default Item; 