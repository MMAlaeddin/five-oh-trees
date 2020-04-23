import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props){
  const {item, onClickingDelete } = props;
  
  return (
    <React.Fragment>
      <h1>Item Details: </h1>
      <h3>{item.name} - {item.category}</h3>
      <p><em>{item.size}</em></p>
      <p><em>{item.quantity}</em></p>
      <button onClick={() => onClickingDelete(item.id) }>Close Item</button>{}
      <hr/>
      </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default ItemDetail;