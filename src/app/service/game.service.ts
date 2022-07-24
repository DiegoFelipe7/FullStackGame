import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../interface/Prueba';
import { Players } from '../interface/Players';
@Injectable({
  providedIn: 'root'
})
export class GameService {

  private url = 'api/game';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }
  /**
   * Peticion get para traer un juego
   * @returns games
   */
  getGame(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.url}/listgame`);
  }
  /**
   * Metodo para agregar jugadores a un juego
   * @param id id del juego 
   * @returns Game
   */

  addPlayer(id: string): Observable<Game> {
    const url = `${this.url}/game/${id}`
    return this.http.put<Game>(url, this.httpOptions);
  }
}
