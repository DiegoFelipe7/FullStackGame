import { Component, OnInit } from '@angular/core';
import { userLogin } from 'src/app/interface/UserLogin';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: userLogin = {
    playerId: localStorage.getItem("id")!,
    email: localStorage.getItem("email")!
  }
   
  constructor(private authService: AuthService) {
    console.log(authService.User)
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
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

}
