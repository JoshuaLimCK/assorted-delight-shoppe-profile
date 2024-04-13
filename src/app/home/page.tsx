import { ShopWrapper } from "@/components/shop-wrapper";
import { StartButton } from "@/components/start-button";
import { Button } from "@/components/ui/button";
import { primamryFont } from "@/fonts";
import { db } from "@/lib/db";

export default async function Home() {
  const shopList = await db.shop.findMany();
  return (
    <>
      <main className={primamryFont.className}>
        <div className="flex flex-col justify-center items-center space-y-2 my-12">
          <h1 className="text-blue-500 text-5xl">Assorted Delight Shoppe</h1>
          <h1 className="text-5xl">
            Sdn Bhd <span className="text-2xl">&#40;1108032-M&#41;</span>
          </h1>
        </div>
        <section className="py-8 grid md:grid-cols-3 gap-y-16 align-middle justify-evenly justify-items-center items-center rounded-lg">
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
        <div className="flex justify-center items-center my-12">
          <StartButton>
            <Button
              className="bg-transparent transition-all rounded-xl border-2 border-blue-500 p-4 duration-300 ease-in-out hover:bg-blue-500 
            transform hover:scale-125"
              variant="outline"
            >
              Start
            </Button>
          </StartButton>
          {/* <Link href={`/introduction`}>
            <button
              className="bg-transparent transition-all rounded-xl p-4 duration-300 ease-in-out hover:bg-blue-500 
            transform hover:scale-125"
            >
              Start
            </button>
          </Link> */}
        </div>
      </main>
    </>
  );
}
