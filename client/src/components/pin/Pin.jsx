import { Link } from "react-router-dom";
import "./pin.scss";
import L from "leaflet";
import { Marker, Popup } from "react-leaflet";

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconSize: [25, 41], // Default size
  iconAnchor: [12, 41], // Positioning anchor
  popupAnchor: [1, -34], // Popup position
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

function Pin({ item }) {
  return (
    <div className="pin">
      <Marker position={[item.latitude, item.longitude]} icon={customIcon}>
        <Popup>
          <div className="popupContainer">
            <img src={item.images} alt="" />
            <div className="textContainer">
              <Link to={`/${item.id}`}>{item.title}</Link>
              <span>{item.bedroom} bedroom </span>
              <b>Rs{item.price}</b>
            </div>
          </div>
        </Popup>
      </Marker>
    </div>
  );
}

export default Pin;
