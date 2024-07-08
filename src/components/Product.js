import React from "react";
import "../styles/Product.css";
import productimage from "../Assests/image-1.png";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Product() {
  return (
    <div className="p-0 container-fluid">
      <div className="row product-section">
        <div className="col-12 col-md-6">
          <img src={productimage} alt="productimage" className="productimage" />
        </div>
        <div className="col-12 col-md-6 backgroundimage">
          <div className="productblueline-container"></div>
          <p className="product-01-title">Product 01</p>
          <div className="productline-container">
            <div className="redproductline-container"></div>
            <div className="blueproductline-container"></div>
          </div>
          <div className="quote-box">
            <p className="quote-text">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit...
            </p>
          </div>
          <hr className="product-horizontalline"></hr>
          <a href="#" className="read-more-btn">
            <FaArrowRight className="icon" />
            Read More
        </a>
        </div>
      </div>
      <div className="row youtube-section explorebackground-image">
        <div className="col-6">
        <div className="Explorequote-box">
            <p className="Explorequote-text">
             Explore Products
            </p>
          </div>
      </div>
      <div className="col-6">
      <div className="arrow-container">
    <div className="arrow-left">
        <FaArrowLeft />
    </div>
    <div className="arrow-right">
        <FaArrowRight />
    </div>
</div>

      </div>
      </div>
      </div>
  );
}

export default Product;
