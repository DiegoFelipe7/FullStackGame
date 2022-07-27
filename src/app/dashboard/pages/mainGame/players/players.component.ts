import { Component, Input, OnInit } from '@angular/core';
import { Game, Player } from 'src/app/interface/Prueba';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  @Input() gamePlayers?: Game[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
