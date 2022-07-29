import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game, Player } from 'src/app/interface/Prueba';
import { userLogin } from 'src/app/interface/UserLogin';
import { GameService } from 'src/app/service/game.service';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() games: Game[] = [];
  player: userLogin = {
    playerId: localStorage.getItem("id")!,
    name: localStorage.getItem("name")!,
    email: localStorage.getItem("email")!,
    globalScore: 0!
  }
  constructor(private gameService: GameService, private router: Router) { }

  ngOnInit(): void {
    this.getGame();
    console.log(this.games)
    console.log(this.games[0]?.players.length)
  }
  getGame(): void {
    this.gameService.getGame().subscribe(res => {
      this.games?.push(...res)
    });
  }

  addPlayerGame(id: string): void {
    console.log(this.player)
    this.gameService.addPlayer(id, this.player).subscribe(() => this.router.navigate([`/Dashboard/GameBoard/${id}`]))
  }

}
