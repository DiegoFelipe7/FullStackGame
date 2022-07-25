import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Users } from '../interface/Users';
import Swal from 'sweetalert2';
import firebase from 'firebase/compat/app';
import { userLogin } from '../interface/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  User: boolean | undefined;
  constructor(public afAuth: AngularFireAuth, public afs: AngularFirestore) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        localStorage.setItem('playerId', JSON.stringify(user.uid));
        localStorage.setItem('email', JSON.stringify(user.email));
        localStorage.setItem("player", JSON.stringify([user.uid, user.email]))
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });

  }

  /**
   * metodo para realizar un registro con google
   * @param email 
   * @param password 
   */
  async SingInGoogle() {
    try {
      let res = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (error) {
      console.log("Ocurrio un error con con el servidor")
    }
  }


  /**
   * metodo para iniciar sesion en la app
   * @param email 
   * @param password 
   */

  async SignIn(email: string, password: string) {
    try {
      await this.afAuth
        .signInWithEmailAndPassword(email, password);

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
  /**
   * Verificacion del usuario logueado
   */

  checkIfUserIsLoggedIn() {
    this.afAuth.onAuthStateChanged(users => {
      !users ? this.User = false : this.User = true;
    })
  }

  /**
   * metodo que retonar el usuario logeado
   * @returns usuario logeado
   */
  getUserLogged() {
    this.afAuth.authState.subscribe((user) =>
      console.log(user)
    );
  }

  logout() {
    this.afAuth.signOut();
  }


}
