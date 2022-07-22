import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(email: string, password: string) {
    if (email.trim() == "" || password.trim() == "") {
      Swal.fire('Campos obligatorios');
      return;
    }
    this.authService.SignIn(email, password).then(() => this.router.navigate(["/dashboard"]).catch(() => Swal.fire('Revisa tu correo o contraseña'))
    );
  }

  registerGoogle() {
    this.authService.SingInGoogle().then(() => this.router.navigate(["/dashboard"]))
  }


}
