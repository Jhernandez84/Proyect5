import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { ProductContext } from '../../context/products/ProductsContext'
import { CantidadOrden } from '../Helpers/HelperOrders'

import './styles.css'

export const CartDetail = () => {

  const { Pedido, aumentar, reducir } = CantidadOrden(0)
  const { cart, addToCart, removeFromCart } = useContext(ProductContext)

  return (
    <>
      {
        cart.map((Product) => (
          <div key={Product._id} className="container cart-card">
            <div className="cart-container-image">
              <img className="cart-card-image" src={Product.image} alt={Product.productName} />
            </div>
            <div className="cart-container-text">
              <p className="cart-card-title">{Product.productName}</p>
              <p className="ellipsis cart-card-text-desc">{Product.desc}</p>
              <p className="cart-card-total-item">Total de este ítem: {parseInt(Product.quantity) * parseFloat(Product.valorUnidad)}</p>
            </div>
            <div className="cart-container-control">
              <>
              {Product.quantity === 1 ? (
                            <>
                                <button className="btn btnCart" onClick={() => reducir(Product)}>
                                    <span className="material-symbols-outlined">
                                        delete
                                    </span>
                                </button>
                                <h3>{Product.quantity}</h3>
                                <button className="btn btnCart" onClick={() => aumentar(Product)}>
                                    <span className="material-symbols-outlined">
                                        add
                                    </span>
                                </button>
                            </>
                        ) : (
                            <>
                                <button className="btn btnCart" onClick={() => reducir(Product)}>
                                    <span className="material-symbols-outlined">
                                        remove
                                    </span>
                                </button>
                                <h2>{Product.quantity}</h2>
                                <button className="btn btnCart" onClick={() => aumentar(Product)}>
                                    <span className="material-symbols-outlined">
                                        add
                                    </span>
                                </button>
                            </>
                        )}
              </>
            </div>
          </div>
        ))
      }
    </>
  )
}