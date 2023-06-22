// import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const ProductCard = ({data: {attributes: p, id}}) => {
    return (
        <Link
            href={`/product/${p.slug}`}
            className="transform overflow-hidden bg-white duration-200 cursor-pointer"
        >
            <Image
                width={500}
                height={500}
                src={p.thumbnail.data.attributes.url}
                alt={p.name}
            />
            <div className="p-1 text-black/[0.9]">
                <h2 className="line-clamp-2 text-xs md:text-lg font-medium md:line-clamp-2">{p.name}</h2>
                <div className="flex items-center text-black/[0.5]">
                    <p className="text-xs mr-2 md:text-lg font-semibold">
                        &#8377;{p.price}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;