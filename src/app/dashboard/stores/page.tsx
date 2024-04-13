import { ShopWrapper } from "@/components/shop-wrapper";
import { primamryFont } from "@/fonts";
import { db } from "@/lib/db";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Stores = async () => {
  const shopList = await db.shop.findMany();
  return (
    <>
      <header
        className={cn(
          "flex justify-center p-6 text-5xl",
          primamryFont.className
        )}
      >
        Stores
      </header>
      <section className="grid md:grid-cols-3 gap-4 align-middle justify-evenly justify-items-center items-center p-4">
        {shopList.map((shop) => (
          <ShopWrapper
            key={shop.id}
            imgSrc={shop.imageLink}
            imgAlt={shop.name}
            imgTxt={shop.name}
            route={"/dashboard/stores/" + shop.id}
          />
        ))}
      </section>
    </>
  );
};

export default Stores;
