import Image from "next/image";
import cart from "../../public/cart.svg";
import img from "../../public/img.jpg";
import imgLg from "../../public/img-lg.jpg";



export default function Home() {
  console.log(img);

  return (
    <main className="min-h-screen bg-cream px-4 py-7 grid md:justify-center items-start md:items-center">
      <div className="max-w-xl grid grid-rows-auto md:grid-cols-2">
        <Image className="md:hidden w-full rounded-t-xl md:rounded-t-none md:rounded-l-xl" src={img}
          alt=""

        />
        <Image className="hidden md:block h-auto w-full rounded-t-xl md:rounded-t-none md:rounded-l-xl md:rounded-tl-xl" src={imgLg}
          alt=""
          sizes="(max-width: 760px) 100vw, 300px)"
        />
        <div className="grid p-6 bg-white rounded-b-xl md:rounded-b-none md:rounded-r-xl text-saurus text-sm md:items-center">
          <p className="mb-2 text-xs">PERFUME</p>
          <h1 className="mb-4 text-2xl font-bold font-heading text-gunmetal leading-none">Gabrielle Essence Eau De Parfum</h1>
          <p className="mb-6">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>

          <p className="flex mb-5"><span className="mr-5 font-heading text-aquamarine font-bold text-2xl">$149.99</span> <del className="text">$149.99</del></p>

          <button className="flex justify-center items-center bg-aquamarine hover:bg-deep-aquamarine transition w-full h-12 rounded-lg text-white font-bold ">
            <Image src={cart} alt="" width={15} height={16} className="mr-2.5" />
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
