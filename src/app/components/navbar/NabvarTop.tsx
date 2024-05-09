import Link from "next/link";
import { Logo } from "./Logo";
import {
  ArrowRightIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import { MegaphoneIcon, UserCircleIcon } from "@heroicons/react/24/outline";

export const NabvarTop = () => (
  <div className="bg-header-gradient">
    <div className="min-h-[80px] container mx-auto flex items-center justify-between">
      <Logo />

      <div className="flex flex-grow space-x-4 mx-[5.5rem]">
        <button className="items-center bg-secondary text-primary justify-between inline-flex min-w-[160px] min-h-[40px] rounded-lg px-8">
          <span className="text-[1.4rem] font-[600]">Kategoriler</span>
          <span>
            <Bars3Icon className="text-primary w-8" />
          </span>
        </button>
        <div className="flex items-center relative flex-grow">
          <span className="flex h-[40px] items-center absolute px-4">
            <MagnifyingGlassIcon className="text-gray-400 w-8" />
          </span>
          <input
            placeholder="Ürün ara"
            className="min-h-[40px] px-16 text-[1.4rem] rounded-lg w-full"
            type="text"
          />
          <button className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center absolute right-4">
            <ArrowRightIcon className="w-6 text-primary" />
          </button>
        </div>
      </div>

      <div className="flex space-x-8 items-center justify-between">
        <Link
          className="text-white flex items-center justify-between space-x-4"
          href="/"
        >
          <MegaphoneIcon className="text-white w-8" />
          <span>Kampanyalar</span>
        </Link>
        <Link
          className="text-white flex items-center justify-between space-x-4 texzt-[1.4rem]"
          href="/"
        >
          <UserCircleIcon className="text-white w-8" />
          <span>Giriş Yap</span>
        </Link>
        <button className="bg-secondary text-primary rounded-md h-[40px] flex items-center text-[lg4rem]">
          <span className="w-[40px] h-[40px] px-4 flex items-center rounded-l-md bg-[#faef59]">
            <ShoppingCartIcon className="w-8" />
          </span>
          <span className="rounded-lg min-w-[10rem] font-bold">₺ 0,00</span>
        </button>
      </div>
    </div>
  </div>
);
