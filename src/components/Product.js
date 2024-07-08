import React from "react";
import "../styles/Product.css";
import productimage from "../Assests/image-1.png";
import productimage2 from "../Assests/image-2.png";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ReactPlayer from 'react-player';

const VideoPreview = ({ url }) => {
    return (
      <div className="video-preview">
        <ReactPlayer url={url} controls={true} width="100%" height="100%" />
      </div>
    );
  };

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
        <div className="col-8 col-md-6">
        <div className="Explorequote-box">
            <p className="Explorequote-text">
             Explore Products
            </p>
          </div>
      </div>
      <div className="col-4 col-md-6">
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
      <div className="row youtubevideo-section">
        <div className="col-12 col-md-4">
          <VideoPreview url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
          <div className="Ourproductquote-box">
        <p className="Ourproductquote-text">
          Exploring Our <span className="highlight">Product 01</span>
        </p>
      </div>
        </div>
        <div className="mt-3 mt-md-0 col-12 col-md-4">
          <VideoPreview url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
          <div className="Ourproductquote-box">
        <p className="Ourproductquote-text">
          Exploring Our <span className="highlight">Product 02</span>
        </p>
      </div>
        </div>
        <div className="mt-3 mt-md-0 col-12 col-md-4">
          <VideoPreview url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
          <div className="Ourproductquote-box">
        <p className="Ourproductquote-text">
          Exploring Our <span className="highlight">Product 03</span>
        </p>
      </div>
        </div>
      </div>
      <div className="row product-02-section">
      <div className="col-12 col-md-6 backgroundimage">
          <div className="productgreenline-container"></div>
          <p className="product-02-title">Product 02</p>
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
        <div className="mt-3 mt-md-0 col-12 col-md-6">
            <img src={productimage2} alt="productimage-2" className="product-2-image"/>
        </div>
      </div>
      </div>
  );
}

export default Product;
