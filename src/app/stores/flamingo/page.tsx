import NavTab from "@/app/navTab";
import Store from "../store";

function Flamingo() {
  return (
    <>
      <NavTab></NavTab>
      <Store
        name="Flamingo Hotel"
        image="/Flamingo.jpg"
        contact="+604-8900212"
        hours="9 am to 9 pm"
      ></Store>
    </>
  );
}

export default Flamingo;
