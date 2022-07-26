import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../interface/Card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private cardurl = 'api/card';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }
  /**
   * metodo para listar todas las cartas
   * @returns 
   */

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.cardurl}/listcards`);
  }
  /**
   * metodo para realizar la busqueda de un game por id 
   * @param id 
   * @returns 
   */

  getCardsId(id: String): Observable<Card> {
    return this.http.get<Card>(`${this.cardurl}/listcard/${id}`);
  }

  /**
   * metodo para actualizar una carta
   * @param card 
   * @returns 
   */
  updateCard(card: Card): Observable<Card> {

    const url = `${this.cardurl}/updatecard/${card.cardId}`;
    return this.http.put<Card>(url, card, this.httpOptions);
  }
  /**
   * eliminacion de un carta por medio de un id
   * @param id 
   * @returns 
   */
  deleteCard(id: String): Observable<Card> {
    return this.http.delete<Card>(`${this.cardurl}/deletecard/${id}`)

  }







}
