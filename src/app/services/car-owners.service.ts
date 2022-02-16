import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IOwner } from '../types/owner.interface';

@Injectable({
  providedIn: 'root'
})
export class CarOwnersService {
  private ownersUrl = 'api/owners'  // URL to web api

  constructor(private readonly http: HttpClient) { }

  getOwners(): Observable<IOwner[]> {
    return this.http.get<IOwner[]>(this.ownersUrl)
  }
}
