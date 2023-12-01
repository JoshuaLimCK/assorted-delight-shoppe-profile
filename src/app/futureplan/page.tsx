import { futurePlanText } from "../constants";
import NavTab from "../navTab";
import SideText from "../sideText";

function FuturePlan() {
  return (
    <>
      <NavTab></NavTab>
      <header className="flex justify-center p-6 text-5xl">Future Plan</header>
      <main className="p-8">
        <h1>
          <p className="whitespace-pre-wrap text-justify">{futurePlanText}</p>
        </h1>
      </main>
    </>
  );
}

export default FuturePlan;
