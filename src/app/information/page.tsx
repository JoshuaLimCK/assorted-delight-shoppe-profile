import { infoText } from "../constants";
import NavTab from "../navTab";
import SideText from "../sideText";

function Information() {
  return (
    <>
      <NavTab></NavTab>
      <header className="flex justify-center p-6 text-5xl">Information</header>
      <main className="p-8">
        <div>
          <p className="whitespace-pre-wrap text-center">{infoText}</p>
        </div>
      </main>
    </>
  );
}

export default Information;
