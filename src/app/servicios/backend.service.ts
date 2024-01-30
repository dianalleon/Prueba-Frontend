import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Servicio, Location, ServicioInfo } from '../interfaces/servicio';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  obtenerDatos(): Observable<ServicioInfo[]> {
    return this.http.get<ServicioInfo[]>(this.apiUrl).pipe(
      map(response => {
        return response.map((servicio : ServicioInfo) =>
            ({ token: servicio.token, address: servicio.address,
              description: servicio.description, service_icon: servicio.service_icon}));
      })
    );
  }

  getListLocation(): Observable<Location[]> {
    return this.http.get<Location[]>(this.apiUrl).pipe(
      map(response => {
        return response.map((location: Location) =>({ long:location.long ,
          lat : location.lat, token: location.token}));
      })
    );
  }

  getObjetoPorId(token: string): Observable<Servicio> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => {
        return response.find((element: Servicio)=>
          element.token === token
        );
      })
    );
  }



}
