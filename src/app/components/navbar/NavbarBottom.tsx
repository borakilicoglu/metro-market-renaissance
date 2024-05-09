import { ArrowRightIcon, MapPinIcon } from "@heroicons/react/24/solid";

export const NavbarBottom = () => (
  <div className="bg-white mx-auto w-full container flex rounded-lg items-center justify-between my-6 shadow-lg p- space-x-4 px-4 text-[1.2rem] border border-gray-200">
    <div>
      <span className="bg-primary rounded-full w-10 h-10 items-center justify-center flex">
        <MapPinIcon className="text-secondary w-6" />
      </span>
    </div>
    <div className="flex flex-grow flex-col">
      <strong>Teslimat adresi belirtilmedi.</strong>
      <p>
        Kozyatağı veya Kağıthane çevresinde sipariş vermek için adresinizi
        paylaşabilirsiniz.
      </p>
    </div>
    <div>
      <span className="bg-secondary rounded-full w-10 h-10 flex items-center justify-center right-4">
        <ArrowRightIcon className="w-6 text-primary" />
      </span>
    </div>
  </div>
);
