"use client";

import { db } from "@/lib/firebase";
import {
    AdvancedMarker,
    APIProvider,
    InfoWindow,
    Map,
} from "@vis.gl/react-google-maps";
import { collection, getDocs } from "firebase/firestore";
import { MapPin, Recycle, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Google Maps API key
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

interface CollectionPoint {
    id: string;
    name: string;
    lat: number;
    lng: number;
    razon?: string;
}

export default function InteractiveMap() {
    const { t } = useTranslation();
    const [collectionPoints, setCollectionPoints] = useState<CollectionPoint[]>(
        [],
    );
    const [selectedPoint, setSelectedPoint] = useState<string | null>(null);
    const [mapLoaded, setMapLoaded] = useState(false);

    useEffect(() => {
        const fetchPuntos = async () => {
            const querySnapshot = await getDocs(
                collection(db, "puntos_recoleccion"),
            );
            const puntosData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                name: doc.data().nombre,
                lat: doc.data().coordenadas.lat,
                lng: doc.data().coordenadas.lng,
                razon: doc.data().razon,
            }));
            puntosData && setCollectionPoints(puntosData as CollectionPoint[]);
        };

        fetchPuntos();
    }, []);

    // Set map as loaded after component mounts
    useEffect(() => {
        if (collectionPoints.length > 0) {
            setMapLoaded(true);
        }
    }, [collectionPoints]);

    // Map styling
    const mapStyles = [
        {
            featureType: "administrative",
            elementType: "all",
            stylers: [{ saturation: "-100" }],
        },
        {
            featureType: "water",
            elementType: "all",
            stylers: [{ color: "#c2e7f5" }, { saturation: "-100" }],
        },
    ];

    // Calculate map center based on all points
    const calculateCenter = () => {
        if (collectionPoints.length > 0) {
            const sumLat = collectionPoints.reduce(
                (sum, point) => sum + point.lat,
                0,
            );
            const sumLng = collectionPoints.reduce(
                (sum, point) => sum + point.lng,
                0,
            );
            return {
                lat: sumLat / collectionPoints.length,
                lng: sumLng / collectionPoints.length,
            };
        }
        return {
            lat: 3.4529634785804646,
            lng: -76.53429855477015,
        };
    };

    return (
        <section id="map" className="relative w-full py-16 md:py-24 bg-gray-50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-12">
                    <div className="p-3 rounded-full bg-indigo-100 mb-4">
                        <MapPin className="h-8 w-8 text-indigo-600" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        {t("map.title", "Collection Points")}
                    </h2>
                    <div className="w-24 h-1 bg-indigo-500 mb-8 rounded-full"></div>
                    <p className="text-gray-600 max-w-3xl">
                        {t(
                            "map.description",
                            "Our smart bins are strategically placed throughout the city for maximum efficiency. Explore the map to find the nearest collection point.",
                        )}
                    </p>
                </div>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div className="h-[500px] rounded-xl overflow-hidden shadow-lg w-full">
                        {mapLoaded ? (
                            <APIProvider apiKey={API_KEY}>
                                <Map
                                    defaultCenter={calculateCenter()}
                                    defaultZoom={18}
                                    gestureHandling="cooperative"
                                    // styles={mapStyles}
                                    mapId="waste-collection-map"
                                    className="w-full h-full rounded-lg"
                                    disableDefaultUI={true}
                                    zoomControl={true}
                                >
                                    {collectionPoints.map((point) => (
                                        <AdvancedMarker
                                            key={point.id}
                                            position={{
                                                lat: point.lat,
                                                lng: point.lng,
                                            }}
                                            onClick={() =>
                                                setSelectedPoint(point.id)
                                            }
                                        >
                                            {/* <Pin
                                                background={
                                                    point.id === selectedPoint
                                                        ? "#10b981"
                                                        : "#6366f1"
                                                }
                                                borderColor="#ffffff"
                                                glyphColor="#ffffff"
                                            /> */}
                                            <img
                                                src="/bintrash.png"
                                                alt="Contenedor"
                                                width="50"
                                                height="50"
                                            />
                                            {selectedPoint === point.id && (
                                                <InfoWindow
                                                    position={{
                                                        lat: point.lat,
                                                        lng: point.lng,
                                                    }}
                                                    onCloseClick={() =>
                                                        setSelectedPoint(null)
                                                    }
                                                >
                                                    <div className="p-2">
                                                        <h3 className="font-semibold text-gray-900">
                                                            {point.name}
                                                        </h3>
                                                        <p className="text-sm text-gray-600">
                                                            {t(
                                                                "map.smartBin",
                                                                "Smart Bin Location",
                                                            )}
                                                        </p>
                                                    </div>
                                                </InfoWindow>
                                            )}
                                        </AdvancedMarker>
                                    ))}
                                </Map>
                            </APIProvider>
                        ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                <p className="text-gray-500">
                                    {t("map.loading", "Loading map...")}
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="w-full md:w-1/3 px-10 flex flex-col space-y-5">
                        <h3 className="text-lg font-semibold text-center">
                            {t("map.selectBin", "Select a Bin")}
                        </h3>
                        {collectionPoints.map((point) => (
                            <button
                                key={point.id}
                                onClick={() => setSelectedPoint(point.id)}
                                className="p-2 bg-indigo-500 text-white rounded-md shadow-md hover:bg-indigo-700 transition"
                            >
                                {point.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
