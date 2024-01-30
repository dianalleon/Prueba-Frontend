import { Component, OnInit } from '@angular/core';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { Feature,} from 'ol';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';

import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import { BackendService } from '../../servicios/backend.service';
import { Location, Servicio } from '../../interfaces/servicio';
import { fromLonLat } from 'ol/proj';
import Select from 'ol/interaction/Select';
import { Point } from 'ol/geom';
import { DetailsComponent } from '../details/details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.sass'
})
export class MapaComponent implements OnInit {

  map!: Map;
  data!: Location[];

  constructor(private backendService: BackendService,
              public dialog: MatDialog){}

  ngOnInit() {
    this.loadLocations();
    this.initMap();
  }

  initMap() {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: fromLonLat([-3.6503554220081, 40.536944050592]),
        zoom: 12
      })
    });

    const selectInteraction = new Select();
    this.map.addInteraction(selectInteraction);

    selectInteraction.on('select', (event: any) => {
      if (event.selected.length > 0) {
        const selectedFeature = event.selected[0];
        this.handleMapClick(selectedFeature);
      }
    });

    this.loadLocations();
  }

  handleMapClick(selectedFeature: Feature): void {
    const location: Location = selectedFeature.get('location');
    this.openDialog(location);
  }

   //Abrir el modal con la información del Servicio
   openDialog(e: Location){
    const dialogRef = this.dialog.open(DetailsComponent, {
      height: '400px',
      width: '600px',
      data : e
    });
  }

  loadLocations() {
    this.backendService.getListLocation().subscribe(
      locations => {
          this.data = locations;
          this.createMarkers(this.data);
        },
      error => {
          console.error('Error al obtener las ubicaciones:', error);
      }
    );
  }

  createMarkers(locations: Location[]) {
    const estiloMarcador = new Style({
      image: new Icon({
        src: 'https://img.icons8.com/color/48/marker--v1.png',
        width: 30
      })
    });

    const markers = locations.map(location => {
      const [long, lat] = [location.long, location.lat];
      const marker = new Feature({
        geometry: new Point(fromLonLat([long, lat])),
        location: location
      });
      marker.setStyle(estiloMarcador);
      return marker;
    });

    const vectorial = new VectorSource({
      features: markers
    });

    const vectorLayer = new VectorLayer({
      source: vectorial
    });

    this.map.addLayer(vectorLayer);
  }
}
