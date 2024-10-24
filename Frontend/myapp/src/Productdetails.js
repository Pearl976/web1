import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ProductDetail.css'; // Import the CSS file

function Productdetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:4000/product/${id}`).then((result) => {
            result.json().then((data) => {
                setProduct(data);
            });
        });
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-detail-container">
            <div className="product-image">
                <img src={product.pimg} alt={product.pname} />
            </div>
            <div className="product-info">
                <h1 className="product-title">{product.pname}</h1>
                <p className="product-price">{product.pprice} RS</p>
                <p className="product-category">Category: {product.pcat}</p>
                <p className="product-description">{product.pdesc}</p>
                <button className="buy-now-button">Buy Now</button>
            </div>
        </div>
    );
}

export default Productdetails;
