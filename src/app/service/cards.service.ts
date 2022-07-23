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

  constructor(private httt: HttpClient) { }

  getCards(): Observable<Card[]> {
    return this.httt.get<Card[]>(`${this.cardurl}/listcards`);
  }

  getCardsId(id: String): Observable<Card> {
    return this.httt.get<Card>(`${this.cardurl}/listcard/${id}`);
  }

  updateCard(card: Card): Observable<Card> {

    const url = `${this.cardurl}/updatecard/${card.cardId}`;
    return this.httt.put<Card>(url, card, this.httpOptions);
  }
  deleteCard(id: String): Observable<Card> {
    return this.httt.delete<Card>(`${this.cardurl}/deletecard/${id}`)

  }







}
