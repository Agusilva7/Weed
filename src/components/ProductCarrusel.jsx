// components/ProductCarousel.js

export default function ProductCarousel() {
    const products = [
      {
        id: 1,
        name: "GMO Cookies",
        price: 32.99,
        brand: "SPINACH",
        image: "/weed.png",
      },
      {
        id: 2,
        name: "Milky Jade Dab Rig",
        price: 61.99,
        brand: "DOPEZILLA",
        image: "/weed.png",
      },
      {
        id: 3,
        name: "Milky Jade Dab Rig",
        price: 61.99,
        brand: "DOPEZILLA",
        image: "/weed.png",
      },
      {
        id: 4,
        name: "Milky Jade Dab Rig",
        price: 61.99,
        brand: "DOPEZILLA",
        image: "/weed.png",
      }
      ,
      {
        id: 5,
        name: "Milky Jade Dab Rig",
        price: 61.99,
        brand: "DOPEZILLA",
        image: "/weed.png",
      }
      ,
      {
        id: 6,
        name: "Milky Jade Dab Rig",
        price: 61.99,
        brand: "DOPEZILLA",
        image: "/weed.png",
      }
    ];
  
    return (
      <div className="w-full ">
        {/* Contenedor principal del carrusel */}
        <div className="flex space-x-4  overflow-auto snap-x snap-mandatory">
          {products?.map((product) => (
            <div key={product.id}
              className="snap-center flex-shrink-0  h-[450px]w-56 bg-white text-gray-900 rounded-lg shadow p-4"
            >
              <div className="mb-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded"
                />
              </div>

              <h3 className="text-sm font-semibold">{product.name}</h3>
              <p className="text-xs text-gray-900">INDICA BY {product.brand}</p>
              <div className="mt-2 text-lg font-bold">${product.price}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  