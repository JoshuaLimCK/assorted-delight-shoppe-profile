import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="p-6">
        <div className="flex justify-center items-center p-2">
          <h1 className="text-blue-500 text-5xl">Assorted Delight Shoppe</h1>
        </div>
        <div className="flex justify-center items-center p-2">
          <h2 className="text-5xl">
            Sdn Bhd <span className="text-2xl">&#40;1108032-M&#41;</span>
          </h2>
        </div>
        <section className="grid grid-cols-3 gap-2 align-middle justify-evenly justify-items-center items-center p-4">
          <Link href="/stores/flamingo">
            <img
              src="Flamingo.jpg"
              alt="Flamingo Hotel"
              className="startPageHotelImg"
            />
            <p className="text-center">Flamingo Hotel</p>
          </Link>
          <Link href="/stores/rainbowParadise">
            <img
              src="Rainbow%20Paradise.jpeg"
              alt="Rainbow Hotel"
              className="startPageHotelImg"
            />
            <p className="text-center">Rainbow Paradise Beach Resort</p>
          </Link>
          <Link href="/stores/doubleTree">
            <img
              src="Double%20Tree.jpeg"
              alt="Flamingo Hotel"
              className="startPageHotelImg"
            />
            <p className="text-center">Double Tree Resort by Hilton</p>
          </Link>
        </section>
        <section className="grid grid-cols-2 gap-2 justify-evenly justify-items-center items-center p-4">
          <Link href="/stores/goldenSands">
            <img
              src="Golden%20Sands.jpeg"
              alt="Rainbow Hotel"
              className="startPageHotelImg"
            />
            <p className="text-center">Shangri-La Golden Sands Resort</p>
          </Link>
          <Link href="/stores/parkroyal">
            <img
              src="Parkroyal.jpeg"
              alt="Flamingo Hotel"
              className="startPageHotelImg"
            />
            <p className="text-center">Parkroyal Resort</p>
          </Link>
        </section>
        <div className="flex justify-center items-center">
          <Link href={`/introduction`}>
            <button
              className="bg-transparent transition-all rounded-xl p-4 duration-300 ease-in-out hover:bg-blue-500 
            transform hover:scale-125"
            >
              Start
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
