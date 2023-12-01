import NavTab from "@/app/navTab";
import Store from "../store";

function Parkroyal() {
  return (
    <>
      <NavTab></NavTab>
      <Store
        name="Parkroyal Resort"
        image="/Parkroyal.jpeg"
        contact="+604-8814295"
        hours="9 am to 7 pm"
      ></Store>
    </>
  );
}

export default Parkroyal;
