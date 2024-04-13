import { cn } from "@/lib/utils";
import { futurePlanText } from "../../constants";
import { primamryFont } from "@/fonts";
function FuturePlan() {
  return (
    <>
      <header
        className={cn(
          "flex justify-center py-12 text-5xl",
          primamryFont.className
        )}
      >
        Future Plan
      </header>
      <main className="px-16">
        <h1 className={primamryFont.className}>
          <p className="whitespace-pre-wrap text-justify">{futurePlanText}</p>
        </h1>
      </main>
    </>
  );
}

export default FuturePlan;
