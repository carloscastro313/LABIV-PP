import { Pokemon } from './../../clases/pokemon';
import { PokemonServicesService } from './../../services/pokemon-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  pokemones = [];
  hidden = false;
  constructor(private _pokemonService : PokemonServicesService) { }

  ngOnInit(): void {
    this._pokemonService.GetListado().subscribe((aux)=>{
      let i = 1;
      console.log(aux);
      aux.results.forEach(element => {

        this.pokemones.push(new Pokemon(element, i));
        i++;
      });
      this.hidden = true;
    })
  }

}
