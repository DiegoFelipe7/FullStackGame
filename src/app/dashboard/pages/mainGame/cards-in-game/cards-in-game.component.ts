import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card, Game, Player } from 'src/app/interface/Prueba';
import { GameService } from 'src/app/service/game.service';

@Component({
  selector: 'app-cards-in-game',
  templateUrl: './cards-in-game.component.html',
  styleUrls: ['./cards-in-game.component.css']
})
export class CardsInGameComponent implements OnInit {
  @Input() cardsPlayer: Player[] = [];

  constructor(private gameService: GameService, private router: ActivatedRoute) { }

  ngOnInit(): void {
  }

  /**
  * Metodo para enviar una carta al tablero
  * @param cardId
  * @param playerId
  */
  betCard(cardId: string, playerId: string): void {
    const idReceipt = this.router.snapshot.params['id'];
    this.gameService.betCard(cardId, playerId, idReceipt).subscribe((res) => {
      this.filterCards(res);
    });
  }

  filterCards(res: Game): void {
    res.players?.filter((player) =>
      player.playerId === localStorage.getItem('id')
        ? (this.cardsPlayer[0] = player)
        : null
    );

  }

}