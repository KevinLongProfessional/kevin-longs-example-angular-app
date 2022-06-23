import { dino, dino_data, dino_strapi, dino_strapi_array, dino_strapi_out, era_strapi } from './dinos';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {lastValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })

export class DinoService{
    private dinosaurs: dino[] = []
    urlBase = 'http://localhost:1337'

    constructor(private http: HttpClient){

    }

    mapInArray(response: dino_strapi_array): dino[]{
        return response.data.map<dino>(function(r: dino_data) {
            return {
                id: r.id,
                name: r.attributes.Name,
                eraId: r.attributes.Era.data.id,
                fancyName: r.attributes.FancyName,
                coolness: r.attributes.Coolness,
                described: r.attributes.Described,
                imageUrl: r.attributes.ImageUrl
            }
        })
    }

    mapIn(response: dino_data): dino{
            return {
                id: response.id,
                name: response.attributes.Name,
                eraId: response.attributes.Era.data.id,
                fancyName: response.attributes.FancyName,
                coolness: response.attributes.Coolness,
                described: response.attributes.Described,
                imageUrl: response.attributes.ImageUrl
            }
    }

    private mapOut(response: dino) {
        //returns a dino_strapi_out object.
        return {
            data: {
                    Name: response.name,
                    Era: response.eraId,
                    FancyName: response.fancyName,
                    Coolness: response.coolness,
                    Described: response.described,
                    ImageUrl: response.imageUrl
            }
        }
    }

    getDinos() {
        return lastValueFrom(this.http.get<dino_strapi_array>('http://localhost:1337/api/dinosaurs?populate=*'));
    }

    getDino(dinoId: number) {
        return lastValueFrom(this.http.get<dino_strapi>(this.urlBase + '/api/dinosaurs/' + dinoId + "?populate=*"));
    }

    addDino(newDino: dino){
        return lastValueFrom(this.http.post<dino_data>(this.urlBase + '/api/dinosaurs/', this.mapOut(newDino)));
    }

    deleteDino(dinoId: number){
        return lastValueFrom(this.http.delete<dino_data>(this.urlBase + '/api/dinosaurs/' + dinoId));
    }

    getEra(eraId: number) {
        return lastValueFrom(this.http.get<era_strapi>(this.urlBase + '/api/eras/' + eraId + '?populate=*'));
    }

    getEras() {
        return lastValueFrom(this.http.get<era_strapi[]>(this.urlBase + '/api/eras?populate=*'));
    }
}