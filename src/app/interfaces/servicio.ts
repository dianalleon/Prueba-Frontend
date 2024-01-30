export interface Servicio {
  service_id:                            string;
  service_icon:                          string;
  service_name:                          string;
  requested_datetime:                    Date;
  jurisdiction_id:                       JurisdictionID;
  status_node_type:                      StatusNodeType;
  typology:                              Typology;
  address:                               string;
  comments_count:                        number;
  complaints_count:                      number;
  current_node_estimated_final_datetime: Date;
  current_node_estimated_start_datetime: Date;
  description:                           string;
  estimated_final_datetime:              Date;
  estimated_start_datetime:              Date;
  evaluation:                            number;
  jurisdiction_element:                  JurisdictionElement;
  address_string?:                       string;
  lat:                                   number;
  long:                                  number;
  reiterations_count:                    number;
  service_request_id:                    string;
  status_node:                           StatusNode;
  tags:                                  any[];
  token:                                 string;
  worknotes_count:                       number;
  user?:                                 User;
  media_url?:                            string;
}

export interface Location{
  token: string;
  long: number;
  lat:number;
}

export interface JurisdictionElement {
  map_layers:               MapLayer[];
  extent:                   number[];
  id:                       JurisdictionElementID;
  location_additional_data: LocationAdditionalData;
  name:                     JurisdictionID;
  type:                     JurisdictionElementType;
  visible_name:             JurisdictionElementVisibleName;
}

export enum JurisdictionElementID {
  The5C9B55579650E67D42985E80 = "5c9b55579650e67d42985e80",
  The5C9B55599650E67D42985E81 = "5c9b55599650e67d42985e81",
  The5C9B556B9650E67D42985E84 = "5c9b556b9650e67d42985e84",
}

export interface LocationAdditionalData {
}

export interface MapLayer {
  backend:       Backend;
  endpoint:      string;
  id:            string;
  is_default:    boolean;
  internal_name: string;
  name:          string;
  preset:        boolean;
  public:        boolean;
  tags:          any[];
  token:         string;
  type:          MapLayerType;
  color?:        string;
  search_layer?: boolean;
}

export enum Backend {
  Ows = "OWS",
}

export enum MapLayerType {
  Administrative = "ADMINISTRATIVE",
  Poi = "POI",
  Work = "WORK",
}

export enum JurisdictionID {
  MXGuadalajara = "mx.guadalajara",
  MXZapopan = "mx.zapopan",
  OrgAlcobendas = "org.alcobendas",
}

export enum JurisdictionElementType {
  City = "city",
}

export enum JurisdictionElementVisibleName {
  Alcobendas = "Alcobendas",
  Guadalajara = "Guadalajara",
  Zapopan = "Zapopan",
}

export interface StatusNode {
  typology_node_id: string;
  id:               string;
  order:            number;
  planned:          boolean;
}

export enum StatusNodeType {
  FinalNotOkNode = "final_not_ok_node",
  FinalOkNode = "final_ok_node",
  InitialNode = "initial_node",
  MiddleNode = "middle_node",
}

export interface Typology {
  color:                 Color;
  description_legend:    DescriptionLegend;
  id:                    TypologyID;
  location_type:         LocationType;
  order:                 number;
  public:                boolean;
  typology_description:  TypologyDescription;
  visible_name:          TypologyVisibleName;
  with_authorized_users: boolean;
  with_description:      boolean;
  with_files:            boolean;
  with_geolocation_data: boolean;
  with_medias:           boolean;
  with_temporality_data: boolean;
}

export enum Color {
  Ebc113 = "#ebc113",
  The0B8D12 = "#0b8d12",
}

export enum DescriptionLegend {
  EjFarolaFundida = "Ej: farola fundida",
}

export enum TypologyID {
  The5850Dca2E22C6D9F51B00C0F = "5850dca2e22c6d9f51b00c0f",
  The5850Dca2E22C6D9F51B00C10 = "5850dca2e22c6d9f51b00c10",
  The5850Dca2E22C6D9F51B00C13 = "5850dca2e22c6d9f51b00c13",
}

export enum LocationType {
  Geolocation = "geolocation",
}

export enum TypologyDescription {
  TengoUnProblemaConUnElementoDeLaCiudad = "Tengo un problema con un elemento de la ciudad",
  TengoUnProblemaConUnElementoEnLaCalle = "Tengo un problema con un elemento en la calle",
}

export enum TypologyVisibleName {
  Aviso = "Aviso",
}

export interface User {
  id: string;
}
