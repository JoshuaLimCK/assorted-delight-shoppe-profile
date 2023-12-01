import NavTab from "@/app/navTab";
import Store from "../store";

function GoldenSands() {
  return (
    <>
      <NavTab></NavTab>
      <Store
        name="Shangri-La Golden Sands Resort"
        image="/Golden%20Sands.jpeg"
        contact="+604-8840556"
        hours="9 am to 7 pm"
      ></Store>
    </>
  );
}

export default GoldenSands;
