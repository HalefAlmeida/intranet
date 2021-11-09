import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comunicado } from '../shared/models/comunicado';

const URL: string = 'http://localhost:3000/comunicados';
@Injectable({
  providedIn: 'root',
})
export class ComunicadoService {
  constructor(private http: HttpClient) {}
  readAll(): Observable<Comunicado[]> {
    return this.http.get<Comunicado[]>(URL);
  }
}
