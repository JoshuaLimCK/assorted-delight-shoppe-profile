interface ShopPageProps {
  name: string;
  image: string;
  contact: string;
  hours: string;
}

export const ShopPage = ({ name, image, contact, hours }: ShopPageProps) => {
  return (
    <>
      <header className="grid grid-cols-1 justify-items-center my-4 text-3xl">
        <div>{name}</div>
        <div>Penang, Busniess Outlet</div>
      </header>
      <hr className="mb-8 mt-6 bg-blue-300" />
      <section className="flex justify-evenly justify-items-center items-center">
        <img
          src={image}
          alt="hotel image"
          className="h-60 w-[15rem] object-cover rounded-xl"
        />

        <div className="p-4 text-xl">
          <h1 className="my-2">Contact Number:</h1>
          <p className="my-2">{contact}</p>
          <h1 className="my-2">Operating Hours</h1>
          <p className="my-2">{hours}</p>
        </div>
      </section>
    </>
  );
};
