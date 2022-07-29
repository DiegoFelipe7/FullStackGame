import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  singUp: FormGroup = this.fb.group({
    name: ["", Validators.required, Validators.minLength(8)],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]]
  })


  fieldValidator(fiel: string) {
    return this.singUp.controls?.[fiel].errors && this.singUp.controls?.[fiel].touched
  }


  /**
   * Metodo para registrar un usuario por medio de el form
   * @param name 
   * @param email 
   * @param password 
   * @returns 
   */
  normalAuthentication(name: string, email: string, password: string): void {

    if (email.trim() == "" || password.trim() == "" || name.trim() == "") {
      Swal.fire('Campos obligatorios');
      return;
    }

    this.authService.SignUp(name, email, password)
      .then(() =>
        this.router.navigate(["/Dashboard/Cards"])).catch(() => Swal.fire('Ocurrió un error en el registro'))

  }
}
