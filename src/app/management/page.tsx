import { managementText } from "../constants";
import NavTab from "../navTab";
import SideText from "../sideText";

function Management() {
  return (
    <>
      <NavTab></NavTab>
      <header className="flex justify-center p-6 text-5xl">
        Key Management
      </header>
      <main className="p-8">
        <h1>
          <p className="whitespace-pre-wrap text-justify">{managementText}</p>
        </h1>
      </main>
    </>
  );
}

export default Management;
