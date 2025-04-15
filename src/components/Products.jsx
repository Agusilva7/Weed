const geneticas=[
    {
        id:1,
        name:"Rodriguez Kush",
        description:"Potente, de flor rápida y efecto relajante.",
        image:"/Cogollo.png"
    },
    {
        id:2,
        name:"Criolla Haze",
        description:"Energética, ideal para el día, con toques cítricos.",
        image:"/Cogollo-2.png"
    },
    {
        id:3,
        name:"Auto RG13",
        description:"Autofloreciente, rápida y rendidora para principiantes.",
        image:"/Cogollo-3.png"
    }
    ,
    {
        id:4,
        name:"Auto RG13",
        description:"Autofloreciente, rápida y rendidora para principiantes.",
        image:"/Cogollo-4.png"
    }
]
export default function Product(){
    return(
        <section className="w-full flex flex-col gap-8 justify-center container p-5 md:p-8 lg:p-20 ">

            <section className="flex flex-col  text-center gap-2.5">
                <h2 className="text-4xl">Nuestras Genéticas</h2>
                <p>Desarrollamos variedades únicas adaptadas al clima y necesidades del cultivador argentino.
                </p>
            </section>

            <div className="w-full flex flex-wrap  sm:flex-wrap md:flex-wrap lg:flex-nowrap  gap-8 justify-center ">
                {
                    geneticas.map((elemento)=>{
                        return(
                            <div key={elemento.id} className="bg-[#1c1c1c] flex flex-col items-center rounded-4xl gap-0 border border-white hover:border-green-700 md:max-w-[3S0px]  grow shrink-0">
                                <img src={elemento.image} width={"350px"} className="rounded-4xl"/>
                                <section className="p-5 flex flex-col text-center gap-2.5">
                                    <h3 className="text-2xl">{elemento.name}</h3>
                                    <p>{elemento.description}</p>
                                </section>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}