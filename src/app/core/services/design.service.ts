import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Design } from '../models/design';

@Injectable({
  providedIn: 'root',
})
export class DesignService {
  private readonly API_URL = environment.baseUrl;

  constructor(private http: HttpClient) {}

  findAllDesigns(): Observable<any> {
    return this.http
      .get<any>(
        `${this.API_URL}/document?total_per_page=10&order_by=title&order_orientation=desc`
      )
      .pipe(take(1));
  }

  findDesignById(id: string) {
    return this.http
      .get<Design>(`${this.API_URL}/document/${id}`)
      .pipe(take(1));
  }
}
