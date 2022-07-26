import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/interface/Card';
import { CardsService } from 'src/app/service/cards.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() cardsHero: Card = {
    cardId: "",
    nameOfCard: "",
    features: "",
    urlImage: "",
    power: 0
  };

  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
  }
  /**
   * metodo para actualizar una carta
   */
  UpdateCard(): void {
    if (this.cardsHero)
      this.cardsService.updateCard(this.cardsHero).subscribe(() => {
        Swal.fire('Carta modificada')
      })
  }
}
