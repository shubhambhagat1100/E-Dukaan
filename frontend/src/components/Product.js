import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from "./Rating";
import axios from "axios";
import { useContext } from "react";
import { Store } from "../Store";
import './Product.css'

function Product(props) {
    const { product } = props;
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
        cart: { cartItems }
    } = state;

    const addToCartHandler = async (item) => {
        const existItem = cartItems.find((x) => x._id === product._id);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        const { data } = await axios.get(`/api/products/${item._id}`);
        if (data.countInStock < quantity) {
            window.alert('Sorry. Product is out of stock');
            return;
        }

        ctxDispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity: quantity } });
    };
    return (
        <Card style={{ padding:'10px', borderWidth: '2px', boxShadow: '1px 2px 9px #a3a0a0' }}>
            <Link to={`/product/${product.slug}`}>
                <div className="item-zoom">
                   <Card.Img src={product.image} alt={product.name} className="card-img-top" />
                </div>
            </Link>
            <Card.Body>
                <Link to={`/product/${product.slug}`}>
                    <Card.Title>{product.name}</Card.Title>
                </Link>
                <Rating rating={product.rating} numReviews={product.numReviews} />
                <Card.Text>₹{product.price}</Card.Text>
                {product.countInStock === 0 ? <Button variant="light" disabled>Out of stock</Button>
                    : <Button onClick={() => addToCartHandler(product)} >Add to Cart</Button>
                }
            </Card.Body>
        </Card>
    )
}

export default Product;