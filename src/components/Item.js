import React, { useState } from "react";

class Item extends React.Component {
  
  state = {
    isInCart: false,
  }
  
  handleAddToCartClick = () => {
    this.setState((prevState) => ({
      isInCart: !prevState.isInCart
    }))
  }

  render () {
    const { isInCart } = this.state;
    const { name, category} = this.props

    return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={isInCart ? "remove" : "add"}
        onClick={this.handleAddToCartClick}
      >
        {isInCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
  }
  
}

export default Item;
