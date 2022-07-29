import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/interface/Prueba';
import { GameService } from 'src/app/service/game.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  players: any[] = [];
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getPlayers();
    console.log(this.players)
  }

  getPlayers(): void {
    this.gameService.getPlayers().subscribe(res => {
      this.players.push(res);
    })
  }




}
