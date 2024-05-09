import Image from "next/image";
import React from "react";

const Badge = ({ url, text }: { url: string; text: string }) => (
  <div className="bg-dark w-[230px] p-5 rounded-lg h-[8rem] items-center flex cursor-pointer space-x-4 justify-start text-[1.8rem] shadow-lg">
    <Image
      alt=""
      src={url}
      width="52"
      height="52"
      style={{ width: "52px", height: "52px" }}
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
      <div className="container mx-auto flex h-[178px] space-x-16">
        <div className="flex items-center">
          <strong className="text-[1.8rem] font-[600] text-dark text-center">
            Mobil Uygulamamızı <br />
            Hemen İndirin!
          </strong>
        </div>
        <div className="flex flex-1 space-x-4 items-center">
          <Badge
            url="https://online.metro-tr.com/c48829a2d5023c05075e.svg"
            text="App Store'dan"
          />
          <Badge
            url="https://online.metro-tr.com/730b99067098c890aaa9.svg"
            text="Google Play'den"
          />
        </div>
        <div className="flex flex-1 items-end">
          <Image
            src="https://online.metro-tr.com/8f5b15564a64fec87381.png"
            width={242.5}
            height={158}
            style={{ objectPosition: "center bottom" }}
            alt=""
          />
        </div>
        <div className="flex flex-1 items-center justify-between">
          <Image
            src="https://online.metro-tr.com/2537a26a71b77d3afabf.svg"
            width={80}
            height={80}
            alt=""
          />
          <span className="text-center text-[1.8rem] font-[600] text-dark">
            İndirmek için <br /> QR kodu kullanın!
          </span>
        </div>
      </div>
    </div>
  );
}
