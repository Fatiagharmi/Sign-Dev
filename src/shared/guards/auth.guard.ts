import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  isSignedIn: any;

  constructor(private router: Router, private store: Store<{ isLog: boolean }>) {
    store.select('isLog').forEach((el: any) => {
      this.isSignedIn = el;
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuth = (paths: Array<any>) => paths.some((path) => path === route.routeConfig?.path);

    if (!this.isSignedIn && !isAuth(['login'])) {
      this.router.navigateByUrl('login');
    }

    if (this.isSignedIn && isAuth(['login'])) {
      this.router.navigateByUrl('unitBoard');
    }

    return true;
  }
}
