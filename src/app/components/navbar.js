"use client";

import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-br from-[#FFDF00] to-[#FFCE00] flex place-content-center py-2 sticky top-0 z-20">
      <div></div>
      {/* <Sidebar yellow={false} /> */}
      <div className="grid grid-cols-3 text-wtfBlack gap-6 flex place-content-center">
        <dev className="flex place-content-center">
          <Link href="/">
            <b className="hover:text-white">Home</b>
          </Link>
        </dev>
        <dev className="flex place-content-center ">
          <Link href="/entertainment">
            <b className="hover:text-white">Entertainment</b>
          </Link>
        </dev>
        <dev className="flex place-content-center">
          <Link href="/Industry">
            <b className="hover:text-white">Industry</b>
          </Link>
        </dev>
      </div>
    </div>
  );
};

export default Navbar;
