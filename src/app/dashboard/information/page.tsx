import { primamryFont } from "@/fonts";
import { infoText } from "../../constants";
import { cn } from "@/lib/utils";

function Information() {
  return (
    <>
      <header
        className={cn(
          "flex justify-center py-12 text-5xl",
          primamryFont.className
        )}
      >
        Information
      </header>
      <main className="px-16">
        <div className={primamryFont.className}>
          <p className="whitespace-pre-wrap text-center">{infoText}</p>
        </div>
      </main>
    </>
  );
}

export default Information;
