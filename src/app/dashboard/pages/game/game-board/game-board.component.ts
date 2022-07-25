import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/interface/Prueba';
import { GameService } from 'src/app/service/game.service';


@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  game: Game[] = [];


  constructor(private gameService: GameService, private router: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.getGameById();
    console.log(this.game)
  }


  getGameById(): void {
    const idReceipt = this.router.snapshot.params['id']
    this.gameService.getGameById(idReceipt).subscribe((res) => {
      this.game.push(res);
    });

  }

}
