import Product from "@/components/Products";
import MainBanner from "@/components/MainBanner";
import WhyUs from "@/components/WhyUs";
import Hero from "@/components/Hero";

export default function Home() {
  return (
  <div className="flex justify-center items-center flex-col bg-[#0C0D0C]">
    <MainBanner/>
    <div className="flex items-center w-ful h-20 p-5 gap-2.5 ">
      <h2 className="text-2xl">Semillas estabilizadas, seleccionadas y adaptadas</h2>
      <button className="p-2 "><span className="ml-1">&rarr;</span></button>
    </div>
    <Hero/>
    <Product/>
  
    <section
      className="relative h-[450px] md:h-[650px] w-full bg-fixed bg-center "
      style={{ backgroundImage: "url('Background-1.jpg')"}}
    >
      
    <div className="absolute inset-0 bg-[#1c1c1c] opacity-50 z-0"></div>

      <div className="relative  container mx-auto h-full">
        <section className="flex flex-col h-full justify-center items-end container mx-auto p-20 z-10 gap-2.5 ">
          <h2 className="text-3xl">Asesoramiento personalizado!</h2>
          <p className="w-[500px] md:w-[600px] ">Si sos nuevo o querés mejorar tus cultivos, te acompañamos en cada paso. Desde cómo germinar hasta cuándo cosechar. Venite al local o escribinos por WhatsApp. Somos cultivadores como vos.</p>
          <button className="p-2 rounded-2xl border text-[16px] mt-2.5 w-[250px]">Envianos un WhatsApp!</button>
        </section>
    </div>

    </section> 
   
    
    <WhyUs/>
    <section
    className="relative h-[450px] md:h-[650px] w-full bg-fixed bg-center "
    style={{ backgroundImage: "url('Background.jpg')"}}
    >
    
      <div className="absolute inset-0 bg-[#1c1c1c] opacity-50 z-0"></div>

      <div className="relative  container mx-auto h-full ">
        <section className="flex flex-col h-full justify-center container mx-auto p-5 md:p-8 lg:p-20 z-10 gap-2.5 ">
          <h2 className="text-3xl">🌱 Conocé quiénes somos</h2>
          <p className=" w-[500px] md:w-[600px] ">En nuestro Grow Shop no solo cultivamos genéticas, también cultivamos una comunidad.
          Descubrí nuestra historia, nuestro equipo y la pasión que nos llevó a crear un espacio pensado para cultivadores como vos.</p>
          <button className="p-2 rounded-2xl border text-[16px] mt-2.5 w-[250px]">👉 Conocé más sobre nosotros</button>
        </section>
      </div>

    </section>






  </div>  
  );
}
