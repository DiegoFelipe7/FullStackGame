import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/interface/Prueba';
import { GameService } from 'src/app/service/game.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: Player[] = []
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getId()
  }

  getId(): void {
    const id = localStorage.getItem("id");
    this.gameService.getPlayerId(id!).subscribe(res => {
      this.profile.push(res);
    })
  }

}
