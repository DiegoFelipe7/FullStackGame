import { Component, Input, OnInit } from '@angular/core';
import { Game, Player } from 'src/app/interface/Prueba';
import { userLogin } from 'src/app/interface/UserLogin';
import { Users } from 'src/app/interface/Users';
import { GameService } from 'src/app/service/game.service';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  games: Game[] = [];
  @Input() userLogin: userLogin | undefined;
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getGame();
  }
  getGame(): void {
    this.gameService.getGame().subscribe(res => {
      this.games?.push(res[0])
    });
  }

  addPlayerGame(id: string,): void {
    console.log(id);
  }

}
