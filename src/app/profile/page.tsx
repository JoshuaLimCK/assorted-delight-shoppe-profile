import { profileText } from "../constants";
import NavTab from "../navTab";
import SideText from "../sideText";

function Profile() {
  return (
    <>
      <NavTab></NavTab>
      <header className="flex justify-center p-6 text-5xl">Profile</header>
      <main className="p-8">
        <h1>
          <p className="whitespace-pre-wrap text-justify">{profileText}</p>
        </h1>
      </main>
    </>
  );
}

export default Profile;
