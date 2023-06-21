import React from "react";
import Link from "next/link";

const data = [
  { id: 1, name: "AIR JORDAN", url: "/air-jordan" },
  { id: 2, name: "NIKE", url: "/NIKE" },
  { id: 3, name: "ADIDAS", url: "/adidas" },
  { id: 4, name: "NEW BALANCE", url: "/new-balance" },
  { id: 5, name: "SALE", url: "/sale" },
  { id: 5, name: "CONTACT", url: "/contact" },
];

const MenuMobile = ({setMobileMenu, categories}) => {
    return (
      <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
        {categories?.map(({attributes: c, id}) => {
          return (
            <li key={id} className="py-4 px-5 border-b">
              <Link href={`/category/${c.slug}`}>{c.name}</Link>
            </li>
          );
        })}
      </ul>
    );
  };

export default MenuMobile;
