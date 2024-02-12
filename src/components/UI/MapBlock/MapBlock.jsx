/* eslint-disable import/no-extraneous-dependencies */
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import "./MapBlock.scss";

function MapBlock({ yandexMap }) {
  return yandexMap ? (
    <map name="yandex-map" className="map-block">
      <YMaps>
        <Map
          defaultState={{ center: [44.817335, 20.497762], zoom: 19 }}
          style={{ width: "100%", height: "40vw" }}
        >
          <Placemark geometry={[44.817335, 20.497762]} />
        </Map>
      </YMaps>
    </map>
  ) : (
    <map name="google-map" className="map-block">
      <iframe
        title="google-map"
        className="map-block__google"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d841.4257114159742!2d20.49768969934562!3d44.81733808175099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7b5d60fc64f5%3A0x967111d197ebb8d9!2sInStantOffice%20-%20Coworking%20in%20Belgrade!5e0!3m2!1sru!2srs!4v1707409923518!5m2!1sru!2srs"
        loading="lazy"
      />
    </map>
  );
}

export default MapBlock;
