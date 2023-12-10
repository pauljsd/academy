import React from "react";
import Image from "next/image";
import { FaBell } from "react-icons/fa";

const navbar = () => {
  return (
    <div className="flex w-[90%] m-auto py-12 border-b justify-between">
      <div className="flex">
        <div className="flex space-x-3 items-center">
          <div>
            <Image
              src={"/img/academy-logo.png"}
              alt="Logo Image"
              width="167"
              height="38"
            />
          </div>
          <div className="nav-links hidden md:block">
            <ul className="flex space-x-4 text-sm text-gray-500 font-semibold">
              <li>Categories</li>
              <li>Teach</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="search-box pr-8 border-r">
          <input
            type="text"
            placeholder="Search Anything"
            className="bg-gray-100 text-sm p-3 rounded"
          />
        </div>
        <div className="avatar-icon flex space-x-2">
          <div className="icon-img pl-8">
            <Image
              src={"/img/user-avatar.png"}
              alt="Logo Image"
              width="60"
              height="60"
              className="rounded-xl"
            />
          </div>
          <div className="icon-text flex space-x-8">
            <div className="">
              <h1 className="font-bold text-gray-900 mb-2">Behzad pashaei</h1>
              <h1 className="font-semibold text-sm text-gray-400">
                ui & ux designer
              </h1>
            </div>
            <div>
              <div className="p-5 bg-purple-100 rounded-xl">
                <FaBell className="text-purple-800 text-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default navbar;
