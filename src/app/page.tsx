"use client";

import dynamic from "next/dynamic";
import { Navbar, Categories, Footer, Banner } from "@/app/components";
import {
  hero,
  showcase,
  miniSlide,
  products,
  prodcutsSecondary,
  banners,
} from "@/data";
import { useWindowWidth } from "@/hooks/useWindowWidth";

// Notice how we directly access the default export
const Slider = dynamic(
  () => import("./components/slider").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="container mx-auto">
        <div className="w-full flex rounded-xl bg-gray-50 h-[379px]" />
      </div>
    ),
  }
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-col space-y-16">
        <Slider content={hero} showPagination={true} />
        <Slider content={showcase} perView={[1, 3]} />
        <Slider content={miniSlide} perView={[2, 4]} shadow={true} />
        <Categories title="Tüm Kategoriler" products={products} />
        <Banner
          alt="Banner"
          width={2458}
          height={365}
          imageUrl={
            "https://cdn.online.metro-tr.com/banner/1180x175/arabanner6032024.jpg"
          }
        />
        <Slider
          content={prodcutsSecondary}
          title="Sizin İçin Seçtiklerimiz"
          shadow={true}
          perView={[3, 6]}
          card={true}
        />
        <Banner content={banners} board={false} />
        <Slider
          content={prodcutsSecondary}
          title="Çok Satılan Ürünler"
          shadow={true}
          perView={[3, 6]}
          card={true}
        />
      </div>
      <Footer />
    </main>
  );
}
