import { cn } from "@/lib/utils";
import { profileText } from "../../constants";
import { primamryFont } from "@/fonts";

function Profile() {
  return (
    <>
      <header
        className={cn(
          "flex justify-center py-12 text-5xl",
          primamryFont.className
        )}
      >
        Profile
      </header>
      <main className="px-16">
        <h1 className={primamryFont.className}>
          <p className="whitespace-pre-wrap text-justify">{profileText}</p>
        </h1>
      </main>
    </>
  );
}

export default Profile;
