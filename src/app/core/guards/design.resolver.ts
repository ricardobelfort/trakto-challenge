import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { DesignService } from '../services/design.service';
import { Design } from './../models/design';

@Injectable({
  providedIn: 'root',
})
export class DesignResolver implements Resolve<Design> {
  constructor(private designService: DesignService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Design> {
    if (route.params && route.params['id']) {
      return this.designService.findDesignById(route.params['id']);
    }
    return of({
      id: '',
      title: '',
      thumbs: {
        raw: '',
        medium: '',
        high: '',
        low: '',
      },
    });
  }
}
