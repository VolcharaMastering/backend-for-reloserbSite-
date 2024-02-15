/* eslint-disable import/no-extraneous-dependencies */
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import "./MapBlock.scss";

function MapBlock({ yandexMap, coordinate1, coordinate2, gmapsSrc }) {
  return yandexMap ? (
    <map name="yandex-map" className="map-block">
      <YMaps>
        <Map
          defaultState={{ center: [coordinate1, coordinate2], zoom: 19 }}
          style={{ width: "100%", height: "40vw" }}
        >
          <Placemark geometry={[coordinate1, coordinate2]} />
        </Map>
      </YMaps>
    </map>
  ) : (
    <map name="google-map" className="map-block">
      <iframe title="google-map" className="map-block__google" src={gmapsSrc} loading="lazy" />
    </map>
  );
}

export default MapBlock;
