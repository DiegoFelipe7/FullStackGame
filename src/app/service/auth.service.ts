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
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { Player } from '../interface/Prueba';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  User: boolean | undefined;
  private urlRequestMongo = 'api/player';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    private http: HttpClient
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        localStorage.setItem('id', user.uid!);
        localStorage.setItem('email', user.email!);
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
      let res = await this.afAuth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );
      const player: userLogin = {
        playerId: res.user?.uid!,
        name: res.user?.displayName!,
        email: res.user?.email!
      }
      this.mongoRegister(player).subscribe();
      await this.SignUp(res.user?.uid!, res.user?.displayName!, res.user?.email!)
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
      const player: userLogin = {
        playerId: result.user?.uid!,
        name: name,
        email: email
      }
      this.mongoRegister(player).subscribe();
      await this.SetUserData(result.user, name);

    } catch (error) {
      window.alert(error);

    }
  }
  /**
   * Metodo para registrar un usuario en back mongo
   * @param player 
   * @returns 
   */
  mongoRegister(player: userLogin): Observable<userLogin> {
    return this.http.post<userLogin>(
      `${this.urlRequestMongo}/createplayer`,
      player,
      this.httpOptions
    );
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
  /**
   * metodo para cerrar la sesion y eliminar la sesion de localstora
   */

  logout() {
    this.afAuth.signOut();
    localStorage.removeItem("id")
    localStorage.removeItem("email")
  }
  /**
   * metodo para verificar si un usuario esta activo
   * @returns 
   */
  verifySession(): Observable<boolean> {
    const id = localStorage.getItem("id");
    if (!localStorage.getItem("id")) {
      return of(false);
    }
    return this.http.get<Player>(`${this.urlRequestMongo}/listplayer/${id}`).pipe(
      map(auth => {
        return true;
      })
    )
  }



}
