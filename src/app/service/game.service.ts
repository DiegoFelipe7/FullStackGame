import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Board, Game, Player } from '../interface/Prueba';
import { userLogin } from '../interface/UserLogin';
@Injectable({
  providedIn: 'root',
})
export class GameService {
  private url = 'api/game';
  private urlplayers = 'api/player';
  _refresh = new Subject<void>();

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
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
    const url = `${this.url}/player/${id}`;
    return this.http.post<userLogin>(url, usuario, this.httpOptions).pipe(
      tap(() => {
        this._refresh.next();
      })
    );
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
    return this.http.get<Game>(`${this.url}/listgame/${id}`);
  }
  /**
   *  Metodo para enviar  una carta el tablero
   * @param cardId carta
   * @param playerId  jugador
   * @param gameId  juego
   * @returns
   */
  betCard(cardId: string, playerId: string, gameId: string): Observable<Game> {
    const url = `${this.url}/${gameId}/betcard/${playerId}/card/${cardId}`;
    return this.http.post<Game>(url, this.httpOptions);
  }

  /**
   * Metodo para determinar el ganador de la ronda
   * @param gameId 
   * @returns 
   */
  winnerRound(gameId: string): Observable<Game> {
    const url = `${this.url}/selectroundwinner/${gameId}`
    return this.http.post<Game>(url, this.httpOptions)
  }

  nextRound(gameId: string): Observable<Game> {
    const url = `${this.url}/nextround/${gameId}`
    return this.http.post<Game>(url, this.httpOptions);
  }



  verifyPlayersLosed(gameId: string): Observable<Game> {
    const url = `${this.url}/verifyplayerslosed/${gameId}`
    return this.http.post<Game>(url, this.httpOptions)
  }
  /**
   * Metodo para los 3 primeros usuarios con mayo puntaje
   * @returns 
   */
  getPlayers(): Observable<Player> {
    return this.http.get<Player>(`${this.urlplayers}/ranking`)
  }
  getPlayerId(id: string): Observable<Player> {
    return this.http.get<Player>(`${this.urlplayers}/listplayer/${id}`)
  }

  surrenderPlayer(gameId: string, playerId: string): Observable<Game> {
    const url = `${this.url}/${gameId}/player/${playerId}`;
    return this.http.post<Game>(url, this.httpOptions);
  }
  startGame(gameId: string): Observable<Game> {
    const url = `${this.url}/startgame/${gameId}`;
    return this.http.post<Game>(url, this.httpOptions);
  }
}
