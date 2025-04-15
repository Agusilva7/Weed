const items=[
    {id:1,
        name:"📦 Envíos rápidos y discretos",
        description:"Entregas en 24 a 72 hs en todo el país. Paquetes sin identificación externa para garantizar tu privacidad.",
        image:"/"
    },
    {id:2,
     name:"🧬 Genética propia y estabilizada",
     description:"Desarrollamos nuestras propias variedades con genética seleccionada, adaptadas al clima local y pensadas para maximizar el rendimiento del cultivador argentino.",
     image:"/"
    },
    {id:3,
        name:"🌿 Calidad verificada en cada lote",
        description:"Probamos cada lote de semillas antes de su distribución para asegurar germinación, sanidad y consistencia genética.",
        image:"/"
       },
]
export default function WhyUs(){
    return(
        <section className="p-5 md:p-8 lg:p-20 gap-2.5 flex  flex-col text-center">
            <h2 className="text-4xl">¿Por qué elegirnos?</h2>
            <p>Esto es lo que nos diferencia de cualquier otro Grow Shop</p>

            <div className="flex flex-col md:flex-col lg:flex-row gap-8 container pt-2.5">
            {
                items.map((elemento=>{
                    return(
                        <section key={elemento.id} className="bg-[#1C1C1C] flex flex-col justify-center basis-1/3 h-[250px] t gap-2.5 p-8 rounded-4xl">
                            <h3 className="text-2xl">{elemento.name}</h3>
                            <p>{elemento.description}</p>
                        </section>
                    )
                }))
            }
            </div>
        </section>
    )
}