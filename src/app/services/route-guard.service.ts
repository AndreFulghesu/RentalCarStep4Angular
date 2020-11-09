import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import {TokenStorageService} from './token-storage.service'


@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private auth:TokenStorageService, private router:Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    

    if (this.auth.getUser() === null){
      this.router.navigate(['login']);
      return false;
    }else{
      return true;
    }
    
  }
}
