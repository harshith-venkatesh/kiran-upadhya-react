import React from "react";
import Logo from "../../img/logo.png";
import { TitleImage } from "../introduction/title";
export default function Header() {
  return (
    <div class="border-b-4 border-amber-500 w-full">
      <div class="lg:flex lg:items-center lg:justify-between ">
        <div class="flex-1 min-w-0 flex justify-center">
          <img src={Logo} alt="logo" className="w-28 absolute left-0 top-0" />
          <h2 class="text-3xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate text-center">
            Kiran Upadhya
          </h2>
        </div>
      </div>
      <TitleImage />
    </div>
  );
}
