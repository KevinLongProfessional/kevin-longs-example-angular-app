import { era_strapi } from './eras';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import {lastValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })

export class EraService{
    urlBase = 'http://localhost:1337'

    constructor(private http: HttpClient){}
    
    getEra(eraId: number) {
        return lastValueFrom(this.http.get<era_strapi>(this.urlBase + '/api/eras/' + eraId + '?populate=*'));
    }

    getEras() {
        return lastValueFrom(this.http.get<era_strapi[]>(this.urlBase + '/api/eras?populate=*'));
    }
}