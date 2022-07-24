import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/interface/Card';
import { CardsService } from 'src/app/service/cards.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cards-heros',
  templateUrl: './cards-heros.component.html',
  styleUrls: ['./cards-heros.component.css']
})
export class CardsHerosComponent implements OnInit {
  page?: number
  cards: Card[] = [];
  cardId: Card = {
    cardId: "",
    nameOfCard: "",
    features: "",
    urlImage: "",
    power: 0
  }
  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
    this.getCards();
  }

  getCards(): void {
    this.cardsService.getCards().subscribe(card => this.cards = card);
  }
  getCardId(id: String): void {
    this.cardsService.getCardsId(id).subscribe(card => this.cardId = card);
  }
  removeCards(id: String): void {
    Swal.fire({
      title: '¿Estas seguro?',
      text: "Estas apunto de eliminar una carta!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cards = this.cards.filter(card => card.cardId !== id);
        this.cardsService.deleteCard(id).subscribe(() => {
          Swal.fire(
            'Deleted!',
            'Carta eliminada',
            'success'
          )
        })
      } else {
        this.getCards();
      }
    })
  }
}
