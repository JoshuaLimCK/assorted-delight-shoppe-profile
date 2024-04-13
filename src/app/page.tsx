import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/home");
  return (
    <>
      {/* <main className="p-6">
        <div className="flex justify-center items-center p-2">
          <h1 className="text-blue-500 text-5xl">Assorted Delight Shoppe</h1>
        </div>
        <div className="flex justify-center items-center p-2">
          <h2 className="text-5xl">
            Sdn Bhd <span className="text-2xl">&#40;1108032-M&#41;</span>
          </h2>
        </div>
        <section className="grid md:grid-cols-3 gap-4 align-middle justify-evenly justify-items-center items-center p-4">
          <ShopWrapper
            imgSrc="Flamingo.jpg"
            imgAlt="Flamingo Hotel"
            imgTxt="Flamingo Hotel"
            route="/stores/flamingo"
          />
          <ShopWrapper
            imgSrc="Rainbow%20Paradise.jpeg"
            imgAlt="Rainbow Hotel"
            imgTxt="Rainbow Paradise Beach Resort"
            route="/stores/rainbowParadise"
          />
          <ShopWrapper
            imgSrc="Double%20Tree.jpeg"
            imgAlt="Double Tree"
            imgTxt="Double Tree Resort by Hilton"
            route="/stores/doubleTree"
          />
        </section>
        <section className="grid md:grid-cols-2 gap-4 justify-evenly justify-items-center items-center p-4">
          <ShopWrapper
            imgSrc="Golden%20Sands.jpeg"
            imgAlt="Golden Sands"
            imgTxt="Shaingri-La Golden Sands Resort"
            route="/stores/goldenSands"
          />
          <ShopWrapper
            imgSrc="Parkroyal.jpeg"
            imgAlt="Parkroyal"
            imgTxt="Parkroyal Resort"
            route="/stores/parkroyal"
          />
        </section>
        <div className="flex justify-center items-center">
          <StartButton>
            <Button
              className="bg-transparent transition-all rounded-xl border-2 border-blue-500 p-4 duration-300 ease-in-out hover:bg-blue-500 
            transform hover:scale-125"
              variant="outline"
            >
              Start
            </Button>
          </StartButton>
          <Link href={`/introduction`}>
            <button
              className="bg-transparent transition-all rounded-xl p-4 duration-300 ease-in-out hover:bg-blue-500 
            transform hover:scale-125"
            >
              Start
            </button>
          </Link>
        </div>
      </main> */}
    </>
  );
}
