import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/interface/Prueba';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() cardsBoard?: any[] = [];
  img: string = '../../../../../assets/img/game/vacio.png';
  constructor() { }

  ngOnInit(): void {
    console.log(this.cardsBoard)
  }



}
