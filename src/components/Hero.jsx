export default function Hero()
{
    return(
        <section
    className="relative h-[450px] md:h-[450px] w-full bg-fixed bg-center "
    style={{ backgroundImage: "url('Background-2.jpg')"}}
    >
    
      <div className="absolute inset-0 bg-[#0C0D0C] opacity-85 z-0"></div>

      <div className="relative  container mx-auto h-full">
        <section className="flex flex-col h-full items-center justify-center container mx-auto p-20 z-10 gap-2.5 ">
          <h2 className="text-3xl">Genética de Precisión para Cultivadores Exigentes</h2>
          <p className="w-[500px] md:w-[650px] lg:w-[850px] text-center">En nuestro Grow Shop ubicado en General Rodríguez, desarrollamos genéticas propias con un enfoque profesional en calidad, estabilidad y rendimiento. Trabajamos con fenotipos seleccionados rigurosamente para ofrecer variedades únicas, adaptadas al clima local y a las necesidades del cultivador argentino. Nuestra prioridad es brindarte semillas confiables, productivas y con perfiles terpenoides definidos, respaldadas por años de investigación y pruebas de campo.</p>
          <button className="p-2 rounded-2xl border text-[16px] mt-2.5 w-[250px]">Envianos un WhatsApp!</button>
        </section>
      </div>

    </section>

    )
}