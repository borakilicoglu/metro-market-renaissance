import React from "react";
import Image from "next/image";
import { ArrowRightIcon, TagIcon } from "@heroicons/react/24/solid";

const Badge = ({ title }: { title: string }) => (
  <div className="rounded-[0.6rem] px-8 bg-smoke text-dark h-[7rem] items-center justify-between flex cursor-pointer hover:opacity-65">
    <span className="w-16 h-16 bg-[#d2d9e4] rounded-full flex items-center justify-center">
      <span className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
        <TagIcon className="w-6 h-6" />
      </span>
    </span>
    <strong className="text-[1.4rem]">{title}</strong>
    <span className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
      <ArrowRightIcon className="w-8 h-8" />
    </span>
  </div>
);

export function Categories({
  title,
  products,
}: {
  title: string;
  products: any[];
}) {
  return (
    <div className="container mx-auto flex flex-col space-y-8 px-8 md:px-0">
      <div className="flex">
        <h3 className="text-dark font-[800] text-[1.6rem]">{title}</h3>
      </div>
      <div className="grid grid-cols-4 lg:grid-cols-9 gap-[2rem]">
        <div className="col-start-1 col-end-3 lg:col-start-1 lg:col-end-3">
          <Badge title="İndirimli Ürünler" />
        </div>
        <div className="col-start-3 col-end-5 lg:col-start-3 lg:col-end-5">
          <Badge title="Yeni Ürünler" />
        </div>
      </div>
      <div className="grid grid-cols-4 lg:grid-cols-9 gap-[2rem]">
        {products.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg h-[16rem] w-full p-2 cursor-pointer hover:shadow-md transition-all flex flex-col"
          >
            <Image src={item.imgSrc} alt="" width={143} height={116} />
            <div className="border-t flex w-full items-center justify-center flex-1">
              <span className="text-center">{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
