import { useState } from "react";

export function Products({ product, count, setCount }) {
    const [show, setShow] = useState(false);

    //Add to Cart
    function addToCart() {
        setShow(!show);
        setCount(count + 1);
    }

    //remove from Cart
    function removeFromCart() {
        setShow(!show);
        setCount(count - 1);
    }

    return (
        <div className="items">

            <img className="dimensions" src={product.img} alt=""></img>

            <div>
                <div className="product">
                    <h2 className="product-name">{product.name}</h2>
                    <span className="product-rating">{product.rating}</span>
                    <p className="product-rupees"><span className="previousPrice">{product.previousPrice}</span>{product.price}</p>
                    {!show ? (
                        <button
                            className="productButton"
                            variant="contained"
                            onClick={addToCart}
                        >
                            Add to cart
                        </button>
                    ) : (
                        ""
                    )}
                    {show ? (
                        <button
                            className="productButton"
                            variant="contained"
                            color="error"
                            onClick={removeFromCart}
                        >
                            Remove from cart
                        </button>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
}