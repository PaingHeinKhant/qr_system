import React from "react";
import Image from "next/image";
import LogoImg from "../../../../public/images/nav/icons8-qr-code-96.png";
const navBar = () => {
  return (
    <div className="container flex item-center py-5">
      <Image src={LogoImg} className="w-10" alt="" />
      <div className="text-2xl fw-bolder ms-3">QR BUSINESS</div>
    </div>
  );
};

export default navBar;
