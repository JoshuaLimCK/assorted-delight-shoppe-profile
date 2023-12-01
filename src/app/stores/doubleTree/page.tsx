import NavTab from "@/app/navTab";
import Store from "../store";

function DoubleTree() {
  return (
    <>
      <NavTab></NavTab>
      <Store
        name="Double Tree Resort by Hilton"
        image="/Double%20Tree.jpeg"
        contact="+604-8900936"
        hours="9 am to 6 pm"
      ></Store>
    </>
  );
}

export default DoubleTree;
