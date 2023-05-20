import React, { Component } from 'react';

export default class ShopItemClass extends Component {

  render() {
    return(
      <>
        <div class="main-content">
          <h2>{this.props.item.brand}</h2>
          <h1>{this.props.item.title}</h1>
          <h3>{this.props.item.description}</h3>
          <div class="description">
            {this.props.item.descriptionFull}
          </div>
          <div class="highlight-window mobile">
            <div class="highlight-overlay"></div>
          </div>
          <div class="divider"></div>
          <div class="purchase-info">
            <div class="price">{this.props.item.currency}{(this.props.item.price).toFixed(2)}</div>
            <button>Добавить в корзину</button>
          </div>
        </div>
      </>
    )
  }

}
