import { cn } from "@/lib/utils";
import { managementText } from "../../constants";
import { primamryFont } from "@/fonts";

function Management() {
  return (
    <>
      <header
        className={cn(
          "flex justify-center py-12 text-5xl",
          primamryFont.className
        )}
      >
        Key Management
      </header>
      <main className="px-16">
        <h1 className={primamryFont.className}>
          <p className="whitespace-pre-wrap text-justify">{managementText}</p>
        </h1>
      </main>
    </>
  );
}

export default Management;
