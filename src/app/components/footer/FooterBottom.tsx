import React from "react";

export function FooterBottom() {
  return (
    <div className="container mx-auto bg-white flex items-center justify-between py-6 px-8 md:px-0">
      <div>
        <span>© METRO Türkiye 2022</span>
      </div>
      <div className="flex space-x-4">
        <span className="cursor-pointer">Kullanım Koşulları</span>
        <span className="cursor-pointer">KVKK Aydınlatma Metni</span>
        <span className="cursor-pointer">Çerezler</span>
        <span className="cursor-pointer">Açık Rıza Metni</span>
        <span className="cursor-pointer">Bilgi Toğluluğu Hizmetleri</span>
      </div>
    </div>
  );
}
