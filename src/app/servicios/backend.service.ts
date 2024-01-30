import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Servicio, Location } from '../interfaces/servicio';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  obtenerDatos(): Observable<{ address: string,
        description: string, service_icon:string, token:string}[]> {
    return this.http.get<Servicio[]>(this.apiUrl).pipe(
      map(response => {
        return response.map(({ address, description, service_icon, token }: Servicio) =>
            ({ address, description, service_icon, token }));
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

  getListLocation(): Observable<Location[]> {
    return this.http.get<Location[]>(this.apiUrl).pipe(
      map(response => {
        return response.map((location: Location) =>({ long:location.long , lat : location.lat, token: location.token}));
      })
    );
  }

}
