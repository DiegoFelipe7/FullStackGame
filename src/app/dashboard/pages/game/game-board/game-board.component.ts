import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { elementAt, Subscription } from 'rxjs';
import { hola, Game, Player } from 'src/app/interface/Prueba';
import { GameService } from 'src/app/service/game.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css'],
})
export class GameBoardComponent implements OnInit {
  game: Game[] = [];
  cardsPlayer: Player[] = [];
  cardsBoard: any[] = [];

  count: number = 0;
  suscribcion!: Subscription;
  img: string = '../../../../../assets/img/game/vacio.png';
  constructor(
    private gameService: GameService,
    private router: ActivatedRoute
  ) {
    this.suscribcion = this.gameService._refresh.subscribe(() => {
      this.getGameById();
    });
  }
  ngOnInit(): void {
    this.getGameById();
    this.getCardsPlayer();
    console.log(this.cardsBoard)
  }
  /**
   * Metodo para consultar un id por medio de el id del juego que se encuentra en la url
   */
  getGameById(): void {
    const idReceipt = this.router.snapshot.params['id'];
    this.gameService.getGameById(idReceipt).subscribe((res) => {
      this.game.push(res);
      this.updateCards(res);
    });
  }

  getCardsPlayer(): void { }
  /**
   * Metodo para enviar una carta al tablero
   * @param cardId
   * @param playerId
   */
  betCard(cardId: string, playerId: string): void {
    const idReceipt = this.router.snapshot.params['id'];
    this.cardsBoard.forEach((element, index) => {
      if (element[index]?.playerId === localStorage.getItem("id")) {
        Swal.fire('Ya apostaste una carta en esta ronda')
        return;
      }
      this.gameService.betCard(cardId, playerId, idReceipt).subscribe((res) => {
        this.game[0] = res;
        this.updateCards(res);
      });

    })
    /*  });*/
  }
  /**
   * Metodo para filtrar las cartas que pertenecen al usuario que inicio sesion
   * @param res
   */

  updateCards(res: Game): void {
    res.players?.filter((player) =>
      player.playerId === localStorage.getItem('id')
        ? (this.cardsPlayer[0] = player)
        : null
    );
    this.getBoard(res);
  }
  /**
   * metodo para llenar el arreglo de cartas que se encuentran en el board
   * @param res
   */
  getBoard(res: Game): void {
    this.cardsBoard[0] = res.board.cardsInGame;
    setTimeout(() => {
      this.selectRoundWinner(res);
    }, 2000);
  }

  selectRoundWinner(res: Game) {
    let viewed: Boolean = this.cardsBoard[0]?.some(
      (element: { viewed: boolean }) => element.viewed === true
    );
    if (viewed) {
      this.gameService.winnerRound(res.id).subscribe((res) => {
        this.updateCards(res);
        console.log(res);
        this.verifyPlayersLosed(res);

      });
    }
  }

  verifyPlayersLosed(res: Game) {
    console.log(res)
    this.gameService.verifyPlayersLosed(res.id).subscribe((res) => {
      //  if(this.game[0].players.length>res.players.length){
      this.updateCards(res)
      console.log(res);
      //}

    });
  }
}
