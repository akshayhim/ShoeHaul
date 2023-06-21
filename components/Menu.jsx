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

const Menu = ({ categories }) => {
    return (
      <ul className="hidden md:flex items-center gap-14 font-medium text-black mb-5">
        {categories?.map(({attributes: c, id}) => {
          return (
            <React.Fragment key={id}>
              <li className="cursor-pointer">
                <Link href={`/category/${c.slug}`}>{c.name}</Link>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    );
  };

export default Menu;