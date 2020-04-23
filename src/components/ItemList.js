import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemList(props) {
  return(
    <React.Fragment>
      <hr/>
      {props.itemList.map((item) => 
      <Item
        category={item.category}
        name={item.name}
        size={item.size}
        quantity={item.quantity} />)}
    </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array
};

export default ItemList; 
