import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Game, Player } from 'src/app/interface/Prueba';
import { GameService } from 'src/app/service/game.service';


@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit, OnChanges {

  game: Game[] = [];
  cardsPlayer: Player[] = []
  suscribcion!: Subscription;

  constructor(private gameService: GameService, private router: ActivatedRoute) {
    this.suscribcion = this.gameService._refresh.subscribe(() => {
      this.getGameById();
    })
  }
  ngOnInit(): void {
    this.getGameById();
    this.getCardsPlayer();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.getGameById();
    console.log(changes);
  }

  getGameById(): void {
    const idReceipt = this.router.snapshot.params['id']
    this.gameService.getGameById(idReceipt).subscribe((res) => {
      this.game.push(res);
      res.players.filter(player => player.playerId === localStorage.getItem("id") ? this.cardsPlayer.push(player) : console.log("error"))

    });
  }


  getCardsPlayer(): void {

  }

}
