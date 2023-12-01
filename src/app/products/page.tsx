import { productsText } from "../constants";
import NavTab from "../navTab";
import SideText from "../sideText";

function Products() {
  return (
    <>
      <NavTab></NavTab>
      <header className="flex justify-center p-6 text-5xl">
        Product Offering
      </header>
      <main className="p-8">
        <h1>
          <p className="whitespace-pre-wrap text-justify">{productsText}</p>
        </h1>
      </main>
    </>
  );
}

export default Products;
