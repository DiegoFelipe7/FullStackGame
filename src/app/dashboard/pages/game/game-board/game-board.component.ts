import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { elementAt, Subscription } from 'rxjs';
<<<<<<< HEAD
import { hola, Game, Player, CardInGame } from 'src/app/interface/Prueba';
=======
import {
  hola,
  Game,
  Player,
  CardInGame,
} from 'src/app/interface/Prueba';
>>>>>>> Diego
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
  betIsViewed: boolean = true;
  count: number = 0;
  suscribcion!: Subscription;
  img: string = '../../../../../assets/img/game/vacio.png';
  cardWinner!: any;
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
    console.log(this.cardsBoard);
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
    let beted: Boolean = this.cardsBoard[0].some(
      (element: any) => element.playerId == playerId
    );

    if (beted) {
      this.betIsViewed = false;
<<<<<<< HEAD
      Swal.fire('Ya apostaste en esta ronda, no puedes apostar nuevamente');
=======
      Swal.fire("Ya apostaste en esta ronda, no puedes apostar nuevamente")
>>>>>>> Diego
    } else {
      this.gameService.betCard(cardId, playerId, idReceipt).subscribe((res) => {
        this.game[0] = res;
        this.updateCards(res);
        this.betIsViewed = false;
      });
    }
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
    console.log(res);
    this.cardsBoard[0] = res.board.cardsInGame;
    console.log(this.cardsBoard);
    setTimeout(() => {
      this.selectRoundWinner(res);
    }, 5000);
  }
  /**
   * Metodo para determinar el ganador de la ronda y cambio de estado de cartas en el board
   * @param res 
   */
  selectRoundWinner(res: Game) {
    let viewed: Boolean = this.cardsBoard[0].some(
      (element: { viewed: boolean }) => element.viewed === true
    );
    console.log(viewed);
    if (viewed) {
      this.showWinnerCard();
      this.gameService.winnerRound(res.id).subscribe((res) => {
        this.updateCards(res);
        this.verifyPlayersLosed(res);
      });
    }
  }


  verifyPlayersLosed(res: Game) {
    console.log(res);
    this.gameService.verifyPlayersLosed(res.id).subscribe((res) => {
      setTimeout(() => {
        res.players.length == 1
          ? Swal.fire(`El ganador de la partida es: ${res.players[0].email}`)
          : null;
      }, 2500);
      this.updateCards(res);
      console.log(res);
      //}
    });
  }

  showWinnerCard(): void {
    let scoreCaptured = 0;

    this.cardsBoard[0].forEach((element: { card: any }) => {
      if (element.card.power > scoreCaptured) {
        scoreCaptured = element.card.power;
        this.cardWinner = element;
      }
    });

    Swal.fire({
      title: `Carta Ganadora: ${this.cardWinner.card.nameOfCard}`,
      imageUrl: `../${this.cardWinner.card.urlImage}`,
      imageHeight: 400,
      imageWidth: 300,
      text: `Power: ${this.cardWinner.card.power} `,
      imageAlt: 'Error cargando la imagen',
    });
  }

  surrenderPlayer(res: Game):void{
    Swal.fire({
      title: 'Estás seguro de retirarte del juego?',
      text: "No podrás revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, deseo retirarme!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.gameService
        .surrenderPlayer(res.id, localStorage.getItem('id')!)
        .subscribe((res) => {
          console.log(res);
          this.updateCards(res);
          
        });

        Swal.fire(
          
          'Te has retirado!',
          'No puedes jugar, pero si observar.',
          'success'
         
        ) 
        setTimeout(() => {
        window.location.reload()
        }, 3000);
      }
    })




    // this.gameService
    //   .surrenderPlayer(res.id, localStorage.getItem('id')!)
    //   .subscribe((res) => {
    //     console.log(res);
    //     this.updateCards(res);
    //   });
  }
}
