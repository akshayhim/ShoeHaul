import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Logo from "@/public/logo-no-background.svg";
import Menu from "./Menu";
import Link from "next/link";
import MenuMobile from "./MenuMobile";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
import { fetchDataFromApi } from "@/utils/api";
import { useSelector } from "react-redux";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [categories, setCategories] = useState(null);

  const { cartItems } = useSelector((state) => state.cart);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[104px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const { data } = await fetchDataFromApi("/api/categories?populate=*");
    setCategories(data);
  };

  return (
    <header
      className={`w-full bg-white sticky top-0 z-20 transition-transform duration-100 ${show}`}
    >
      <Wrapper className="h-[74px] py-4">
        <div className="text-center">
          <Link href="/" className="py-3 pb-6">
            <Image
              src={Logo}
              alt="Shoe Haul Brand Logo"
              className="invert w-[120px] md:w-[170px] mx-auto mb-1 relative top-3"
            />
          </Link>
        </div>
        <div className="flex justify-end absolute top-5 right-2 items-center gap-1 text-black">
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative mr-1">
            <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
            {/* <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
              
            </div> */}
          </div>
          <Link href="/cart">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative mr-1">
              <BsCart className="text-[15px] md:text-[20px]" />
              {cartItems.length > 0 && (
                <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                  {cartItems.length}
                </div>
              )}
            </div>
          </Link>
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2 md:hidden">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[20px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <AiOutlineMenu
                className="text-[23px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </Wrapper>
      <div className="flex justify-center">
        <Menu 
          categories={categories}
        />
        {mobileMenu && (
          <MenuMobile 
            setMobileMenu={setMobileMenu}
            categories={categories}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
