import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';


const Leaflet = () => {
    const position = [33.6584, -117.7473];
    return (
        <div className="h-[500px] max-w-[1100px] mx-auto my-12 mb-40 p-4">
            <h3 className="text-center font-bold text-4xl my-10">Where we located?</h3>
            <MapContainer center={position} zoom={12} scrollWheelZoom={false} className="w-full h-full">
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                <Popup>
                300 Spectrum Center Drive, Irvine, CA 92618, USA
                </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Leaflet;