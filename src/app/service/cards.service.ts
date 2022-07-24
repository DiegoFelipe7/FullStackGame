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

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.cardurl}/listcards`);
  }

  getCardsId(id: String): Observable<Card> {
    return this.http.get<Card>(`${this.cardurl}/listcard/${id}`);
  }

  updateCard(card: Card): Observable<Card> {

    const url = `${this.cardurl}/updatecard/${card.cardId}`;
    return this.http.put<Card>(url, card, this.httpOptions);
  }
  deleteCard(id: String): Observable<Card> {
    return this.http.delete<Card>(`${this.cardurl}/deletecard/${id}`)

  }







}
