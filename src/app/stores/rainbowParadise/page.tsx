import NavTab from "@/app/navTab";
import Store from "../store";

function RainbowParadise() {
  return (
    <>
      <NavTab></NavTab>
      <Store
        name="Rainbow Paradise Beach Resort"
        image="/Rainbow%20Paradise.jpeg"
        contact="+604-8901271"
        hours="9 am to 6 pm"
      ></Store>
    </>
  );
}

export default RainbowParadise;
