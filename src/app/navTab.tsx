import Link from "next/link";
import * as React from "react";

function NavTab() {
  return (
    <>
      <main className="grid grid-cols-6 bg-gray-400 items-center justify-center py-2">
        <div className="col-span-1 text-center">
          <Link href="/">
            <h1 className="hover:scale-110 transition-transform duration-300">
              Assorted Delight Shoppe <br /> Sdn Bhd
            </h1>
          </Link>
        </div>
        <nav className="flex justify-evenly items-center p-4 col-span-5">
          <Link href="/introduction" className="group">
            <p className="navText">Introduction</p>
            <hr className="navLine group-hover:w-full" />
          </Link>
          <Link href="/profile" className="group">
            <p className="navText">Profile</p>
            <hr className="navLine group-hover:w-full" />
          </Link>
          <Link href="/information" className="group">
            <p className="navText">Information</p>
            <hr className="navLine group-hover:w-full" />
          </Link>
          <Link href="/management" className="group">
            <p className="navText">Key Management</p>
            <hr className="navLine group-hover:w-full" />
          </Link>
          <Link href="/products" className="group">
            <p className="navText">Product Offering</p>
            <hr className="navLine group-hover:w-full" />
          </Link>
          <Link href="/futureplan" className="group">
            <p className="navText">Future Plan</p>
            <hr className="navLine group-hover:w-full" />
          </Link>
          <Link href="/stores" className="group">
            <p className="navText">Stores</p>
            <hr className="navLine group-hover:w-full" />
          </Link>
        </nav>
      </main>
    </>
  );
}

export default NavTab;
