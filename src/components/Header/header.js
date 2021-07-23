import React from "react";
import Logo from "../../assets/AlohasLogo.png";
import IconFb from "../../assets/IconFacebook.png";
import IconInsta from "../../assets/IconInstagram.png";
import IconPint from "../../assets/IconPinterest.png";
import IconCart from "../../assets/IconCart.png";
import IconFav from "../../assets/IconFav.png";
import IconWatch from "../../assets/IconWatch.png";
import IconUser from "../../assets/IconUser.png";
import IconSearch from "../../assets/IconSearch.png";

const Header = () => {
  return (
    <div class="flex m-1 leading-6">
      <div class="flex absolute opacity-60 p-22 mt-4 left-2 ">
        <img class=" w-6 h-6 mr-4 cursor-pointer " src={IconInsta} />
        <img class="w-6 h-6 mr-4 cursor-pointer " src={IconPint} />
        <img class="w-6 h-6 mr-4 cursor-pointer " src={IconFb} />
      </div>
      <div class="flex justify-center w-full">
        <img class="h-14 sticky top-0 bg-white z-20" src={Logo} />
      </div>
      <div class="flex absolute opacity-60 p-22 right-2	 mt-4">
        <button class="mt-2 mr-6">
          <span>ES</span>
          <span>(€)</span>
        </button>
        <img class="w-6 h-6 mr-4 cursor-pointer " src={IconSearch} />
        <img class="w-6 h-6 mr-4 cursor-pointer " src={IconUser} />
        <img class="w-6 h-6 mr-4 cursor-pointer " src={IconWatch} />
        <img class="w-6 h-6 mr-4 cursor-pointer " src={IconFav} />
        <img class="w-6 h-6 mr-4 cursor-pointer " src={IconCart} />
      </div>
    </div>
  );
};

export default Header;
