import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Users } from '../interface/Users';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth, public afs: AngularFirestore, private router: Router) { }

  /**
   * metodo para iniciar sesion en la app
   * @param email 
   * @param password 
   */

  async SignIn(email: string, password: string) {
    try {
      await this.afAuth
        .signInWithEmailAndPassword(email, password);
      this.router.navigate(["/dashboard"]);
    } catch (error) {
      Swal.fire('Revisa tu correo o contraseña');
    }
  }




  /**
   * Metodo para realizar el registro de usuario
   * @param email 
   * @param password 
   */
  async SignUp(name: string, email: string, password: string) {
    try {
      const result = await this.afAuth
        .createUserWithEmailAndPassword(email, password);
      console.log(result)
      await this.SetUserData(result.user, name);
      Swal.fire('Jugador registrado')
      setTimeout(() => {
        this.router.navigate(["/"]);
      }, 2000);

    } catch (error) {
      window.alert(error);

    }
  }

  /**
   * Metodo para la creacion de una coleccion de usuarios
   * @param user 
   * @returns 
   */
  async SetUserData(user: any, name: string) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: Users = {
      uid: user.uid,
      name: name,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return await userRef.set(userData, {
      merge: true,
    });
  }

}
