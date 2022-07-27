import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userLogin } from 'src/app/interface/UserLogin';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  player: userLogin = {
    playerId: localStorage.getItem("id")!,
    name: localStorage.getItem("name")!,
    email: localStorage.getItem("email")!
  }

  constructor(private authService: AuthService, private route: Router) {

  }

  ngOnInit(): void {
  }

  salida() {
    Swal.fire({
      title: '¿Estas seguro de salir?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.logout();
        this.route.navigate(["/"])
      }
    })
  }

}
