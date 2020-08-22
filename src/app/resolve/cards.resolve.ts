import { ServiceService } from './../service.service';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
 export class  CardsResolve implements Resolve<any> {
  constructor(private service: ServiceService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<any>|Promise<any>|any {
      return this.service.getcards();
  }
}
