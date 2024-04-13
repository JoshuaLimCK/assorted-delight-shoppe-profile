import { ShopPage } from "@/components/shop-page";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

const OneStore = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const storeData = await db.shop.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (storeData === null) {
    redirect("/dashboard/stores");
  }
  return (
    <>
      <ShopPage
        name={storeData.name}
        image={storeData.imageLink}
        contact={storeData.contact}
        hours={storeData.hours}
      />
    </>
  );
};

export default OneStore;
