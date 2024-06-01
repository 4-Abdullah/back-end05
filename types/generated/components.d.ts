import type { Schema, Attribute } from '@strapi/strapi';

export interface CartCart extends Schema.Component {
  collectionName: 'components_cart_carts';
  info: {
    displayName: 'Cart';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Quantity: Attribute.Integer;
    Totalprice: Attribute.Integer;
  };
}

export interface CartProductlist extends Schema.Component {
  collectionName: 'components_cart_productlists';
  info: {
    displayName: 'Productlist';
    icon: 'alien';
    description: '';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'cart.cart': CartCart;
      'cart.productlist': CartProductlist;
    }
  }
}
