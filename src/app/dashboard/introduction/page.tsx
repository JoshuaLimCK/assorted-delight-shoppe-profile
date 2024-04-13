import { primamryFont } from "@/fonts";
import { introText } from "../../constants";
import { cn } from "@/lib/utils";

function Introduction() {
  return (
    <>
      <header
        className={cn(
          "flex justify-center py-12 text-5xl",
          primamryFont.className
        )}
      >
        Introduction
      </header>
      <main className="px-16">
        <h1 className={primamryFont.className}>
          <p className="whitespace-pre-wrap text-justify">{introText}</p>
        </h1>
      </main>
    </>
  );
}

export default Introduction;
