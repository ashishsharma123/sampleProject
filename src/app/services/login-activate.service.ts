import {RouterStateSnapshot, ActivatedRouteSnapshot,  CanActivate, Router} from '@angular/router';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Rx";
import {Http} from '@angular/http'; 


@Injectable()
export class LoginActivateService implements CanActivate {

  constructor(private http: Http, private router: Router) { }
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.http.get('https://restcountrighfhges.eu/rest/v1/all')
    .map((res)=>{
      return true;
    })
    .catch((err)=>{
        this.router.navigate(['login']);
        return Observable.of(false);
    })
  }
}
