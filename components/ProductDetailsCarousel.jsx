import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ProductDetailsCarousel = ({ images }) => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px] md:w-[500px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        {images?.map((img) => (
          <img key={img.id} src={img.attributes.url} alt={img.attributes.name} />
        ))}
        {/* <img src="/air-jordan-1-low-shoes-459b4T.jpg" alt="a" />
        <img src="/air-jordan-1-low-shoes-459b4T (1).jpg" alt="" /> */}
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
