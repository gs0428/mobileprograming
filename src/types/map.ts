export interface MapProps {
  latitude: number;
  longitude: number;
}

export interface CameraProps extends MapProps {
  zoom: number;
}
