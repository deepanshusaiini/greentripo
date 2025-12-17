declare module "google-map-react" {
    interface BootstrapURLKeys {
      key?: string;
      language?: string;
      region?: string;
    }
  
    interface Coords {
      lat: number;
      lng: number;
    }
  
    interface Props {
      bootstrapURLKeys?: BootstrapURLKeys;
      defaultCenter?: Coords;
      center?: Coords;
      defaultZoom?: number;
      zoom?: number;
      yesIWantToUseGoogleMapApiInternals?: boolean;
      children?: React.ReactNode;
      onGoogleApiLoaded?: (map: any, maps: any) => void;
    }
  
    export default class GoogleMapReact extends React.Component<Props> {}
  }
  