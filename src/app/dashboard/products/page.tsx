import { cn } from "@/lib/utils";
import { productsText } from "../../constants";
import { primamryFont } from "@/fonts";
import { ProductWrapper } from "@/components/product-wrapper";

function Products() {
  return (
    <>
      <header
        className={cn(
          "flex justify-center py-12 text-5xl",
          primamryFont.className
        )}
      >
        Product Offering
      </header>
      <main className="px-16">
        <div className="mb-16">
          <h1 className={primamryFont.className}>
            <p className="whitespace-pre-wrap text-justify">{productsText}</p>
          </h1>
        </div>
        <div className="grid grid-cols-3">
          {/* TODO: Add more products here using a list retrieved from db then
          .map and encapsulate in ProductWrapper */}
        </div>
        <ProductWrapper
          name="Shirt"
          price={6}
          imgSrc="https://static.massimodutti.net/3/photos//2024/V/0/2/p/0153/346/405/0153346405_1_1_16.jpg?t=1699011436394&impolicy=massimodutti-itxmediumhigh&imwidth=500&imformat=chrome"
        />
      </main>
    </>
  );
}

export default Products;
