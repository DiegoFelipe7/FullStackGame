import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  normalAuthentication(name: string, email: string, password: string): void {

    if (email.trim() == "" || password.trim() == "" || name.trim() == "") {
      Swal.fire('Campos obligatorios');
      return;
    }

    this.authService.SignUp(name, email, password)
      .then(() =>
        this.router.navigate(["/Dashboard/Cards"]).catch(() => Swal.fire('Ocurrió un error en el registro'))

      ).catch(() => Swal.fire('Ocurrio un error'));
  }
}
