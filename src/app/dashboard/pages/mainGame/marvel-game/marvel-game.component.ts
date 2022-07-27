import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game, Player } from 'src/app/interface/Prueba';
import { GameService } from 'src/app/service/game.service';

@Component({
  selector: 'app-marvel-game',
  templateUrl: './marvel-game.component.html',
  styleUrls: ['./marvel-game.component.css']
})
export class MarvelGameComponent implements OnInit {
  game: Game[] = [];
  cardsPlayer: Player[] = [];
  cardsBoard: any[] = [];
  constructor(
    private gameService: GameService,
    private router: ActivatedRoute
  ) {

  }
  ngOnInit(): void {
    this.getGameById();
  }
  /**
   * Metodo para consultar un id por medio de el id del juego que se encuentra en la url
   */
  getGameById(): void {
    const idReceipt = this.router.snapshot.params['id'];
    this.gameService.getGameById(idReceipt).subscribe((res) => {
      this.game.push(res);
      this.filterCards(res);
      this.getBoard(res);
    });
  }
  /**
   * Metodo para filtrar la carta de los usuarios
   * @param res 
   */
  filterCards(res: Game): void {
    res.players?.filter((player) =>
      player.playerId === localStorage.getItem('id')
        ? (this.cardsPlayer[0] = player)
        : null
    );

    this.getBoard(res);
  }


  /**
   * metodo para llenar el arreglo de cartas que se encuentran en el board
   */
  getBoard(res: Game): void {
    this.cardsBoard[0] = res.board.cardsInGame;

  }
}