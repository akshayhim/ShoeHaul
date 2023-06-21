"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";
// import nb1 from '@/public/af5ac9167390329.642817aa082b4.jpg';

const HeroBanner = () => {
  return (
    <div className="relative text-white text-20px w-full md:max-w-[1360px] mx-auto">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={5000}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer opacity-40 hover:opacity-70"
          >
            <BiArrowBack className="text-sm md:text-lg" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer opacity-40 hover:opacity-70"
          >
            <BiArrowBack className="rotate-180 text-sm md:text-lg" />
          </div>
        )}
      >
        <div>
          <Image
            src="/nb2.png"
            width={1920}
            height={600}
            alt="New balance poster"
            className="aspect-[16/10] md:aspect-auto object-contain md:object-cover"
          />
          <div className="px-[15px] md:px-[18px] py-[10px] md:py-[20px] font-oswald bg-white/[1] absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[10px] md:text-[20px] uppercase cursor-pointer rounded-e-lg font-extrabold opacity-90 hover:opacity-80 hover:bg-white/[0.9] hover:text-black/[1] hover:rounded-e-xl">
            Shop now
          </div>
        </div>
        <div>
          <Image
            src="/ad1.png"
            width={1920}
            height={600}
            alt="Adidas golf poster"
            className="aspect-[16/10] md:aspect-auto object-contain md:object-cover"
          />
          <div className="px-[15px] md:px-[18px] py-[10px] md:py-[20px] font-oswald bg-white/[1] absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[10px] md:text-[20px] uppercase cursor-pointer rounded-e-lg font-extrabold opacity-90 hover:opacity-80 hover:bg-white/[0.9] hover:text-black/[1] hover:rounded-e-xl">
            Shop now
          </div>
        </div>

        <div>
          <Image
            src="/aj2.png"
            width={1920}
            height={600}
            alt="jordan one banner"
            className="aspect-[16/10] md:aspect-auto object-contain md:object-cover"
          />
          <div className="px-[15px] md:px-[18px] py-[10px] md:py-[20px] font-oswald bg-white/[1] absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[10px] md:text-[20px] uppercase cursor-pointer rounded-e-lg font-extrabold opacity-90 hover:opacity-80 hover:bg-white/[0.9] hover:text-black/[1] hover:rounded-e-xl">
            Shop now
          </div>
        </div>
        <div>
          <Image
            src="/nb1.png"
            width={1920}
            height={600}
            alt="new balance banner"
            className="aspect-[16/10] md:aspect-auto object-contain md:object-cover"
          />
          <div className="px-[15px] md:px-[18px] py-[10px] md:py-[20px] font-oswald bg-white/[1] absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[10px] md:text-[20px] uppercase cursor-pointer rounded-e-lg font-extrabold opacity-90 hover:opacity-80 hover:bg-white/[0.9] hover:text-black/[1] hover:rounded-e-xl">
            Shop now
          </div>
        </div>
        <div>
          <Image
            src="/ad2.png"
            width={1920}
            height={600}
            alt="new balance banner"
            className="aspect-[16/10] md:aspect-auto object-contain md:object-cover"
          />
          <div className="px-[15px] md:px-[18px] py-[10px] md:py-[20px] font-oswald bg-white/[1] absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[10px] md:text-[20px] uppercase cursor-pointer rounded-e-lg font-extrabold opacity-90 hover:opacity-80 hover:bg-white/[0.9] hover:text-black/[1] hover:rounded-e-xl">
            Shop now
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
