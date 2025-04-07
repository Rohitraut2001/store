import Cards from "./components/cards";
import CartItems from "./components/cartitems";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar/>
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-black">
          Welcome to Our Creative Space
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-700">
          Discover endless possibilities and bring your ideas to life.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
         
          <Cards/>
          <CartItems/>
        </div>
      </div>
    </div>
  );
}
