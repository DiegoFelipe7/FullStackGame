import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { elementAt, Subscription } from 'rxjs';
import { hola, Game, Player } from 'src/app/interface/Prueba';
import { GameService } from 'src/app/service/game.service';


@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit, OnChanges {

  game: Game[] = [];
  cardsPlayer: Player[] = []
  cardsBoard: any[] = []
  suscribcion!: Subscription;
  img: string = "../../../../../assets/img/game/vacio.png"
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
      this.updateCards(res);
      this.getBoard(res);
    });
  }


  getCardsPlayer(): void {

  }

  betCard(cardId: string, playerId: string): void {
    const idReceipt = this.router.snapshot.params['id']
    this.gameService.betCard(cardId, playerId, idReceipt).subscribe((res) => {
      this.game[0] = res;
      this.updateCards(res);
    })
  }

  updateCards(res: Game): void {
    res.players.filter(player => player.playerId === localStorage.getItem("id") ? this.cardsPlayer[0] = player : console.log("error"))
    this.getBoard(res)
  }

  getBoard(res: Game): void {
    console.log(res);
    this.cardsBoard[0] = (res.board.cardsInGame);
    console.log(this.cardsBoard[0])
   let  viewed:Boolean  = this.cardsBoard[0].some((element: { viewed: boolean; })=>element.viewed===true);
   if(viewed){
    this.gameService.winnerRound(res.id).subscribe((res)=>this.updateCards(res))
   }
  }
}
