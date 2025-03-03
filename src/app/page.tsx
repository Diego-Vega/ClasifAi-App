import Mapa from "@/app/components/Mapa";
import bannerHeader from "@/app/assets/images/bannerTop-recoleccion.jpg";
import bannerFooter from "@/app/assets/images/bannerBot-recoleccion.jpg";

export default function Home() {
    return (
        <main className="flex flex-col items-center text-center p-4">
            {/* Hero Section */}
            <section
                className="w-full bg-green-500 text-white py-20 bg-cover bg-center rounded-lg"
                style={{
                    backgroundImage: `linear-gradient(rgb(0, 201, 81), rgba(0, 166, 61, 0.7)), url(${bannerHeader.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <h1 className="text-4xl font-bold">
                    Recolección Inteligente de Residuos
                </h1>
                <p className="mt-4 text-lg">
                    Ubica los puntos de recolección más cercanos y contribuye al
                    medio ambiente.
                </p>
            </section>

            {/* Sobre la iniciativa */}
            <section className="max-w-3xl py-12">
                <h2 className="text-2xl font-bold">¿Qué es esta iniciativa?</h2>
                <p className="mt-4 text-gray-700">
                    Este proyecto busca optimizar la recolección de residuos en
                    el Boulevard del Río, en Cali, mediante papeleras
                    inteligentes que clasifican los desechos automáticamente.
                </p>
            </section>

            {/* Mapa Interactivo */}
            <section className="w-full py-12 bg-gray-100 flex flex-col items-center justify-center rounded-lg">
                <h2 className="text-2xl font-bold mb-6 md:mb-0 w-full py-10 px-5">
                    Mapa de Puntos de Recolección
                </h2>
                <div className="w-full max-w-4xl h-auto mx-auto">
                    <Mapa />
                </div>
            </section>

            {/* Beneficios */}
            <section className="max-w-3xl py-12">
                <h2 className="text-2xl font-bold">
                    Beneficios de la Iniciativa
                </h2>
                <ul className="mt-4 text-gray-700">
                    <li>♻️ Reducción de residuos en las calles</li>
                    <li>🌱 Mayor conciencia ambiental</li>
                    <li>📍 Ubicación precisa de contenedores inteligentes</li>
                </ul>
            </section>

            {/* Contacto */}
            <section
                className="w-full bg-green-600 text-white py-12 rounded-lg"
                style={{
                    backgroundImage: `linear-gradient(rgb(0, 201, 81), rgba(0, 166, 61, 0.5)), url(${bannerFooter.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <h2 className="text-2xl font-bold">¡Únete a la causa!</h2>
                <p className="mt-4">Si quieres saber más, contáctanos.</p>
                <button className="mt-4 px-6 py-2 bg-white text-green-600 rounded-lg font-bold">
                    Contáctanos
                </button>
            </section>
        </main>
    );
}
