function Store(props: storeInfo) {
  return (
    <>
      <header className="grid grid-cols-1 justify-items-center my-4 text-3xl">
        <div>{props.name}</div>
        <div>Penang, Busniess Outlet</div>
      </header>
      <hr className="mb-8 mt-6 bg-blue-300" />
      <section className="flex justify-evenly justify-items-center items-center">
        <img
          src={props.image}
          alt="hotel image"
          className="h-60 w-[15rem] object-cover rounded-xl"
        />
        <div className="p-4 text-xl">
          <h1 className="my-2">Contact Number:</h1>
          <p className="my-2">{props.contact}</p>
          <h1 className="my-2">Operating Hours</h1>
          <p className="my-2">{props.hours}</p>
        </div>
      </section>
    </>
  );
}

export default Store;

type storeInfo = {
  name: string;
  image: string;
  contact: string;
  hours: string;
};
