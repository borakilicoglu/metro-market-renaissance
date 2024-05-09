import { PhoneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const categories = [
  { id: 0, title: "Meyve, Sebze" },
  { id: 1, title: "Et, Tavuk, Şarküteri" },
  { id: 2, title: "Deniz Ürünleri" },
  { id: 3, title: "Temel Gıda, Şekerleme" },
  { id: 4, title: "Süt, Kahvaltılık" },
  { id: 5, title: "Donuk Ürünler" },
  { id: 6, title: "İçecekler" },
  { id: 7, title: "Deterjan, Temizlik" },
  { id: 8, title: "Kişisel Bakım, Kozmetik" },
  { id: 9, title: "Kullan At" },
  { id: 10, title: "Ofis, Kırtasiye" },
  { id: 11, title: "Çocuk, Bebek, Oyuncak" },
  { id: 12, title: "Giyim, Aksesuar, Spor" },
  { id: 13, title: "Elektronik" },
  { id: 14, title: "Ev, Mutfak, Eğlence, Hobi" },
  { id: 15, title: "Yapı Market, Bahçe, Otomobil" },
  { id: 16, title: "Evcil Hayvan" },
];

const account = [
  { id: 0, title: "Siparişlerim" },
  { id: 1, title: "Hesap Bilgilerim" },
  { id: 2, title: "Adreslerim" },
  { id: 3, title: "Favori Ürünlerim" },
];

const institutional = [
  { id: 0, title: "Kurumsal Bilgiler" },
  { id: 1, title: "Sıkça Sorulan Sorular" },
];

export function FooterMiddle() {
  return (
    <div className="bg-smoke">
      <div className="container mx-auto flex flex-col md:flex-row py-[3.7rem] space-y-16 md:space-y-0 px-8 md:px-0">
        <div className="w-full md:w-1/5">
          <h4 className="text-dark mb-[2rem] font-[700]">Kategroiler</h4>
          <ul className="flex flex-col space-y-[0.8rem]">
            {categories.slice(0, 9).map((item: any) => (
              <li key={item.id} className="text-clay leading-[1.2em]">
                <Link href="">{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/5">
          <h4 className="text-dark mb-[2rem] font-[700]"></h4>
          <ul className="flex flex-col space-y-[0.8rem]">
            {categories.slice(9, 20).map((item: any) => (
              <li key={item.id} className="text-clay leading-[1.2em]">
                <Link href="">{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/5">
          <h4 className="text-dark mb-[2rem] font-[700]">Hesabım</h4>
          <ul className="flex flex-col space-y-[0.8rem]">
            {account.map((item: any) => (
              <li key={item.id} className="text-clay leading-[1.2em]">
                <Link href="">{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/5">
          <h4 className="text-dark mb-[2rem] font-[700]">Kurumsal</h4>
          <ul className="flex flex-col space-y-[0.8rem]">
            {institutional.slice(0, 9).map((item: any) => (
              <li key={item.id} className="text-clay leading-[1.2em]">
                <Link href="">{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/5 hidden md:block">
          <div className="flex flex-col space-y-4 text-clay bg-smoke  shadow-md border border-gray-300 p-4 rounded-lg">
            <Image
              width={400}
              height={400}
              src="https://storage.googleapis.com/dopingcloud/blog/tr/2023/09/etbis.jpg"
              alt=""
            />
            <span>Etbis`e kayıtlıdır.</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex border-t-2 border-primary py-6 justify-between items-center px-8 md:px-0">
        <div className="flex items-center space-x-4">
          <span className="text-dark font-[700]">Bizi Arayın</span>
          <PhoneIcon className="w-8 text-dark" />
          <strong className="text-[2rem]">444 50 40</strong>
        </div>
        <div className="flex space-x-4">
          <svg
            className="w-8 h-8 text-dark"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
              clipRule="evenodd"
            />
          </svg>

          <svg
            className="w-8 h-8 text-dark"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
          </svg>
          <svg
            className="w-8 h-8 text-dark"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            className="w-8 h-8 text-dark"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
