import React from "react";
import { FooterTop, FooterBottom, FooterMiddle } from ".";

export function Footer() {
  return (
    <div className="flex flex-col mt-auto pt-[7.3rem]">
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </div>
  );
}
