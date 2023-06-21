import React from "react";
import {
  FaCcAmex,
  FaCcDinersClub,
  FaCcDiscover,
  FaApplePay,
  FaCcPaypal,
} from "react-icons/fa";
import { SiMastercard, SiVisa } from "react-icons/si";

const PaymentLogos = () => {
  return (
    <div className="flex items-center justify-end mt-5 mr-5 gap-3">
      <FaCcAmex size={20} className="mr-2 text-white" />
      <FaApplePay size={20} className="mr-2 text-white" />
      <FaCcDinersClub size={20} className="mr-2 text-white" />
      <FaCcDiscover size={20} className="mr-2 text-white" />
      <SiMastercard size={20} className="mr-2 text-white" />
      <FaCcPaypal size={20} className="mr-2 text-white" />
      <SiVisa size={20} className="mr-2 text-white" />
    </div>
  );
};

export default PaymentLogos;
