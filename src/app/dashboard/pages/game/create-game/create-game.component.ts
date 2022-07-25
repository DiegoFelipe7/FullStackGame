import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Board } from 'src/app/interface/Prueba';
import { GameService } from 'src/app/service/game.service';


@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {
  board: Board = {
    boardId: '',
    cardsInGame: [],
    principalMallet: []
  };
  constructor(private gameService: GameService, private router: Router) { }

  ngOnInit(): void {
  }

  createGame() {
    this.gameService.createGame(this.board).subscribe(() => {
      this.router.navigate(
        ["/Dashboard/Game"]
      )
    })

  }

}
