import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemList(props) {
  return(
    <React.Fragment>
      <hr/>
      {props.itemList.map((item) => 
      <Item
        category={item.category} //category = prop
        name={item.name} //name = prop
        size={item.size} //size = prop
        quantity={item.quantity} //quantity = prop
        />)} 
    </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array
};

export default ItemList; 
