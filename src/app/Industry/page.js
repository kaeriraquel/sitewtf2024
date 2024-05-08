"use client";
import Navbar from "../components/navbar";
import Link from "next/link";
import { notFound, usePathname } from "next/navigation";
import industryList from "../components/industry.json";

export default function industry() {
  const productList = industryList.industryList.map((product) => (
    <div key={product.id}>
      {/* Check this so that the image fills up the correct way */}
      <Link href={"Industry/" + product.id}>
        <div className="rounded-lg h-12 w-32 md:h-32 md:w-64 bg-wtfGrey place-content-center">
          {/* <img
              className="object-scale-down object-contain h-36 p-4"
              src={product.logo}
            /> */}
          <div className="sf-font text-center text-wtfYellow text-md md:text-xl md:p-4 font-bold">
            {product.title}
          </div>
        </div>
      </Link>
    </div>
  ));
  return (
    <main className="h-screen bg-skull-pattern">
      <Navbar />
      <h1 className="py-8 text-center text-[40px] md:text-[80px] sf-font text-wtfYellow font-bold">
        INDUSTRY 4.0
      </h1>
      <div className=" flex place-content-center">
        {/* Check if this is 2 or 3 cols */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 p-4 ">
          {" "}
          {productList}
        </div>
      </div>
    </main>
  );
}
