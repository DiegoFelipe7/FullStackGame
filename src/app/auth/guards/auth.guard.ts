import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private route: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {


    return this.authService.verifySession().pipe(
      tap(session => {
        if (!session) {
          this.route.navigate(["/auth/SignIn"])
        }

      })
    )
  }

  /**
   * previene que se carge un modulo o ruta hija
   * @param route 
   * @param segments 
   * @returns 
   */
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean | UrlTree {
    return this.authService.verifySession().pipe(
      tap(session => {
        if (!session) {
          this.route.navigate(["/auth/SignIn"])
        }

      })
    )
  }
}
