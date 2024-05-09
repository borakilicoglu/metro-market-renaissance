import Image from "next/image";
import React from "react";

const Badge = ({ url, text }: { url: string; text: string }) => (
  <div className="bg-dark w-[200px] lg:w-full p-5 rounded-lg h-[6rem] items-center flex cursor-pointer space-x-4 justify-start text-[1.2rem] shadow-lg">
    <Image
      alt=""
      src={url}
      width="52"
      height="52"
      style={{ width: "32px", height: "32px" }}
    />
    <div>
      <p className="text-white">{text}</p>
      <p className="text-white">indirin</p>
    </div>
  </div>
);

export function FooterTop() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto flex-col lg:flex-row flex h-auto lg:h-[178px] space-x-0 lg:space-x-12 lg:py-0 py-16 space-y-16 lg:space-y-0 items-center">
        <div className="flex flex-1 items-center justify-center">
          <strong className="text-[1.8rem] font-[600] text-dark text-center">
            Mobil Uygulamamızı Hemen İndirin!
          </strong>
        </div>
        <div className="flex flex-1 space-x-8 items-center justify-center">
          <Badge
            url="https://online.metro-tr.com/c48829a2d5023c05075e.svg"
            text="App Store'dan"
          />
          <Badge
            url="https://online.metro-tr.com/730b99067098c890aaa9.svg"
            text="Google Play'den"
          />
        </div>
        <div className="flex flex-1 items-center space-x-4 justify-center">
          <Image
            src="https://online.metro-tr.com/2537a26a71b77d3afabf.svg"
            width={52}
            height={52}
            alt=""
          />
          <span className="text-center text-[1.8rem] font-[600] text-dark">
            İndirmek için QR kodu kullanın!
          </span>
        </div>
      </div>
    </div>
  );
}
