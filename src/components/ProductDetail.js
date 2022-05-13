import React from "react";
import Categories from "./Categories";
import { Link, useParams } from "react-router-dom";
import Rating from "react-rating";
import products from "../products.json";
import "../styles/productDetail.css";
import star from "../img/star.png";
import starOutline from "../img/star-outline.png";
import Products from "./Products";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ProductDetail = (props) => {
  const params = useParams();
  const filteredProduct = products.filter(({ id }) => id == params.id);
  const product = filteredProduct[0];
  const related = products.filter(
    ({ category }) => category == params.category
  );
  let relatedWithoutCurrent = related.filter(({ id }) => id != params.id);
  relatedWithoutCurrent = relatedWithoutCurrent.sort(() => Math.random() - 0.5);
  const randomRelated = relatedWithoutCurrent.slice(0, 4);

  return (
    <div>
      <div className="product-details">
        <h1>{product.title}</h1>
        <div className="product-img-info">
          <div>
            <Zoom>
              <img alt={product.title} src={product.image} width="300" />
            </Zoom>
          </div>
          <div className="product-info-desc">
            <h4>Description:</h4>
            <p>{product.description}</p>
            <h4>Reviews:</h4>
            <div>
              <Rating
                fractions={2}
                emptySymbol={
                  <img src={starOutline} alt="empty star" className="icon" />
                }
                fullSymbol={<img src={star} alt="star" className="icon" />}
                initialRating={product.rating.rate}
                readonly
              />{" "}
              {product.rating.rate}/5
            </div>
            <div>Based on{" " + product.rating.count} reviews</div>

            <h2>Price: ${product.price}</h2>
            <button
              className="checkout"
              onClick={() => props.addToCart(product.id)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div>
        <p>Related products:</p>
        <Products products={randomRelated} addToCart={props.addToCart} />
      </div>
    </div>
  );
};

export default ProductDetail;
