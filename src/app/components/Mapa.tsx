"use client";

import { db } from "@/lib/firebase";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

interface PuntoRecoleccion {
    id: string;
    nombre: string;
    coordenadas: {
        lat: number;
        lng: number;
    };
    razon: string;
}

const Mapa = () => {
    const [puntos, setPuntos] = useState<PuntoRecoleccion[]>([]);
    const [selectedPoint, setSelectedPoint] = useState<PuntoRecoleccion | null>(
        null,
    );

    const mapOptions = {
        disableDefaultUI: true, // Oculta todos los controles
        zoomControl: true, // Opcional: oculta el control de zoom
    };

    useEffect(() => {
        const fetchPuntos = async () => {
            const querySnapshot = await getDocs(
                collection(db, "puntos_recoleccion"),
            );
            const puntosData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as PuntoRecoleccion[];
            setPuntos(puntosData);
            // setSelectedPoint(puntosData[0]);
        };

        fetchPuntos();
    }, []);

    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full max-w-3xl h-96 mx-auto relative px-5">
                <LoadScript
                    googleMapsApiKey={
                        process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""
                    }
                >
                    <GoogleMap
                        mapContainerClassName="w-full h-full rounded-lg"
                        options={mapOptions} // <- Aquí pasas las opciones
                        center={
                            selectedPoint
                                ? selectedPoint.coordenadas
                                : {
                                      lat: 3.4529634785804646,
                                      lng: -76.53429855477015,
                                  }
                        }
                        zoom={17}
                    >
                        {puntos.map((punto) => (
                            <Marker
                                key={punto.id}
                                position={punto.coordenadas}
                            />
                        ))}
                    </GoogleMap>
                </LoadScript>
            </div>
            <div className="w-full md:w-1/3 px-10 flex flex-col space-y-2">
                <h3 className="text-lg font-semibold">Selecciona un Punto:</h3>
                {puntos.map((punto) => (
                    <button
                        key={punto.id}
                        onClick={() => setSelectedPoint(punto)}
                        className="p-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-700 transition"
                    >
                        {punto.nombre}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Mapa;
