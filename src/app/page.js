import Product from "@/components/Products";
import MainBanner from "@/components/MainBanner";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
  <div className="flex justify-center items-center flex-col bg-[#0C0D0C]">
    <MainBanner/>
    <Product/>
    <section style={{backgroundImage:"url('/Background-1.jpg')", opacity:0.5}}className="flex h-[450px] md:h-[650px] w-full p-20  bg-cover">
        
    </section>
    
    <WhyUs/>
    <section style={{backgroundImage:"url('/Background.jpg')", opacity:0.5}}className="flex h-[450px] md:h-[650px] w-full p-20  bg-cover">
        
        </section>




  </div>  
  );
}
