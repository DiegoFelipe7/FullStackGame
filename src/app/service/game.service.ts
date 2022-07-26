import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Board, Game } from '../interface/Prueba';
import { userLogin } from '../interface/UserLogin';
@Injectable({
  providedIn: 'root'
})
export class GameService {

  private url = 'api/game';
  _refresh = new Subject<void>();

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

  addPlayer(id: string, usuario: userLogin): Observable<userLogin> {
    const url = `${this.url}/player/${id}`
    return this.http.post<userLogin>(url, usuario, this.httpOptions).pipe(
      tap(() => {
        this._refresh.next();
      })
    );;
  }
  /**
   * Metodo para crear un juego y un tablero
   * @param board
   * @returns
   */
  createGame(board: Board) {
    const url = `${this.url}/createGame`;
    return this.http.post<Board>(url, board, this.httpOptions);
  }
  /**
   * Metodo para buscar un juego
   * @param id game
   * @returns 
   */
  getGameById(id: string): Observable<Game> {
    return this.http.get<Game>(`${this.url}/listgame/${id}`)
  }
  /**
   *  Metodo para tirar una carta el tablero
   * @param cardId carta
   * @param playerId  jugador
   * @param gameId  juego
   * @returns 
   */
  betCard(cardId: string, playerId: string, gameId: string): Observable<Game> {
    const url = `${this.url}/${gameId}/betcard/${playerId}/card/${cardId}`
    return this.http.post<Game>(url, this.httpOptions);
  }
}
