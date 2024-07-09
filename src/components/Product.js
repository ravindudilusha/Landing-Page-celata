import React, { useState, useEffect } from "react";
import "../styles/Product.css";
import productimage from "../Assests/image-1.png";
import productimage2 from "../Assests/image-2.png";
import sliderimage1 from "../Assests/slider-image-1.png";
import sliderimage2 from "../Assests/slider-image-2.png";
import sliderimage3 from "../Assests/slider-image-3.png";
import sliderimage4 from "../Assests/slider-image-4.png";
import { FaArrowLeft, FaArrowRight, FaYoutube } from "react-icons/fa";

// VideoPreview component
const VideoPreview = ({ url, thumbnailUrl, staticProductNumber }) => {
  return (
    <div className="video-preview">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="thumbnail-container">
          <img
            src={thumbnailUrl}
            alt={`Video Thumbnail for Product ${staticProductNumber}`}
            className="thumbnail-image"
          />
          <div className="youtube-icon-container">
            <FaYoutube className="youtube-icon" />
          </div>
        </div>
      </a>
      <div className="Ourproductquote-box">
        <p className="Ourproductquote-text">
          Exploring Our <span className="highlight">Product {staticProductNumber}</span>
        </p>
      </div>
    </div>
  );
};

// Product component
function Product() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videosPerPage, setVideosPerPage] = useState(1); // Default to 1 video per page on smaller screens

  const videoPreviews = [
    {
      url: "https://www.youtube.com/watch?v=f90zh9NRErw",
      thumbnailUrl: sliderimage3,
    },
    {
      url: "https://www.youtube.com/watch?v=f90zh9NRErw",
      thumbnailUrl: sliderimage4,
    },
    {
      url: "https://www.youtube.com/watch?v=f90zh9NRErw",
      thumbnailUrl: sliderimage1,
    },
    {
      url: "https://www.youtube.com/watch?v=f90zh9NRErw",
      thumbnailUrl: sliderimage4,
    },
  ];

  const totalVideos = videoPreviews.length;

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % totalVideos);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + totalVideos) % totalVideos);
  };

  // Update videosPerPage based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setVideosPerPage(3); // Show 3 videos per page on larger screens (like tablets and desktops)
      } else {
        setVideosPerPage(1); // Default to 1 video per page on smaller screens
      }
    };

    // Initial call
    handleResize();

    // Listen to window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup the listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="p-0 container-fluid">
      {/* Product Section */}
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

      {/* YouTube Section with Arrow */}
      <div className="row youtube-section explorebackground-image">
        <div className="col-8 col-md-6">
          <div className="Explorequote-box">
            <p className="Explorequote-text">Explore Products</p>
          </div>
        </div>
        <div className="col-4 col-md-6">
          <div className="arrow-container">
            <div className="arrow-left" onClick={prevSlide}>
              <FaArrowLeft />
            </div>
            <div className="arrow-right" onClick={nextSlide}>
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="row youtubevideo-section">
        {videoPreviews
          .slice(currentSlide, currentSlide + videosPerPage)
          .map((video, index) => (
            <div key={index} className={`col-12 col-md-${12 / videosPerPage}`}>
              <div className="video-preview-container">
                <VideoPreview
                  url={video.url}
                  thumbnailUrl={video.thumbnailUrl}
                  staticProductNumber={currentSlide + index + 1}
                />
              </div>
            </div>
          ))}
      </div>
      </div>


      {/* Product 02 Section */}
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
          <img
            src={productimage2}
            alt="productimage-2"
            className="product-2-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Product;
