import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PokemonServicesService {

  constructor(private httpClient : HttpClient) { }

  GetListado(){
    return this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon');
  }

  GetDetalle(pokemon){
    return this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon/'+pokemon);
  }

  GetAbility(url){
    return this.httpClient.get<any>(url);
  }
}
