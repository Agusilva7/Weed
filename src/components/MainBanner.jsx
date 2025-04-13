export default function MainBanner(){
    return(
    <section  style={{ backgroundImage: "url('/cannabis.png')" }} className=" h-[45vw] w-full   bg-contain bg-no-repeat bg-right ">
      <div className="flex flex-col container mx-auto  justify-center h-full gap-2.5 p-20 text-white">
        <h1 className="text-5xl">Grow Shop</h1>
        <h2 className="text-2xl">En General Rodriguez</h2>
        <button className="bg-green-700 w-36 p-2.5 rounded-2xl text-[16px]">Ver Catalogo</button>
      </div>
    </section>
    )
}