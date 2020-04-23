import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemList(props) {
  return(
    <React.Fragment>
      <hr/>
      {props.itemList.map((item) => 
      <Item
        whenItemClicked={props.onItemSelection}
        category={item.category} //category = prop
        name={item.name} //name = prop
        size={item.size} //size = prop
        quantity={item.quantity} //quantity = prop
        id={item.id}
        key={item.id}
        />)} 
    </React.Fragment>
  );
}

//assign strict data types ro all of our properties 
//key-value pair 
ItemList.propTypes = {
  itemList: PropTypes.array,
  onItemSelection: PropTypes.func
};

export default ItemList; 
