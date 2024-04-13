import Link from "next/link";
import { NavItem } from "@/components/nav-item";

export const NavigationTab = () => {
  return (
    <>
      <main className="grid grid-flow-col bg-gray-400 items-center justify-center py-2">
        <div className="col-span-1 text-center">
          <Link href="/">
            <h1 className="hover:scale-110 transition-transform duration-300">
              Assorted Delight Shoppe <br /> Sdn Bhd
            </h1>
          </Link>
        </div>
        <nav className="grid grid-cols-4 lg:flex justify-evenly items-center p-4">
          <NavItem link="/dashboard/introduction" content="Introduction" />
          <NavItem link="/dashboard/profile" content="Profile" />
          <NavItem link="/dashboard/information" content="Information" />
          <NavItem link="/dashboard/management" content="Management" />
          <NavItem link="/dashboard/products" content="Products" />
          <NavItem link="/dashboard/futureplan" content="Future Plan" />
          <NavItem link="/dashboard/stores" content="Stores" />
        </nav>
      </main>
    </>
  );
};
