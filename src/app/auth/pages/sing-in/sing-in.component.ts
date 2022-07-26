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

  /**
   * Metodo para inicio de sesion por medio de formulario
   * @param email 
   * @param password 
   * @returns 
   */
  login(email: string, password: string) {
    if (email.trim() == "" || password.trim() == "") {
      Swal.fire('Campos obligatorios');
      return;
    }
    this.authService.SignIn(email, password).then(() => this.router.navigate(["/Dashboard/Cards"]).catch(() => Swal.fire('Revisa tu correo o contraseña'))
    );
  }
  /**
   * Registro con google y inicio de sesion
   */

  registerGoogle() {
    this.authService.SingInGoogle().then(() => this.router.navigate(["/Dashboard/Cards"]).catch(() => Swal.fire('Ocurrió un error inesperado')));
  }


}
