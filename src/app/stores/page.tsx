import Link from "next/link";
import NavTab from "../navTab";

function Stores() {
  return (
    <>
      <NavTab></NavTab>
      <header className="flex justify-center p-6 text-5xl">Stores</header>
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
    </>
  );
}

export default Stores;
