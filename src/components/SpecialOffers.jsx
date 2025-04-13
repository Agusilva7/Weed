import AllProductsButton from "./AllProductButton";
import ProductCarousel from "./ProductCarrusel";
export default function SpecialOfers(){
    return(
        <div className="flex flex-col justify-center p-20 items-center w-[1280px]  gap-5">
            <h2 className="text-2xl">Special Offers</h2>
            <section className="bg-slate-50 text-2xl text-black p-[30px]  rounded-2xl ">
                <h3>Get up to</h3>
                <h4 className="text-4xl text-green-700">25% OFF</h4>
                <img className="w-[250px] object-contain" src="/weed.png"/>
            </section>
            <div className="flex flex-row justify-between w-full">
                <h2 className="text-2xl">Popular Products</h2>
                <AllProductsButton/>
            </div>
            <ProductCarousel/>
        </div>
    )
}