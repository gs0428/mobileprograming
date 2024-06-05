export interface MapProps {
  _latitude: number;
  _longitude: number;
}

export interface CameraProps extends MapProps {
  zoom: number;
}
