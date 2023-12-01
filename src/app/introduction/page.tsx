import { introText } from "../constants";
import NavTab from "../navTab";
import SideText from "../sideText";

function Introduction() {
  return (
    <>
      <NavTab></NavTab>
      <header className="flex justify-center p-6 text-5xl">Introduction</header>
      <main className="p-8">
        <h1>
          <p className="whitespace-pre-wrap text-justify">{introText}</p>
        </h1>
      </main>
    </>
  );
}

export default Introduction;
