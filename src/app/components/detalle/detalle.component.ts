import { Pokemon } from './../../clases/pokemon';
import { PokemonServicesService } from './../../services/pokemon-services.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  public pokemonName : string;
  public pokemonImg = Array( );
  public pokemonMove = Array();
  hidden = false;
  constructor(
    private _pokemonServicesService : PokemonServicesService,
    private router : Router
    ) { }

  ngOnInit(): void {
    let params = this.router.url.split("/");
    this._pokemonServicesService.GetDetalle(params[3]).subscribe((aux)=>{
      console.log(aux);
      this.pokemonName = aux.species.name;

      this.pokemonImg.push(aux.sprites.back_default);
      this.pokemonImg.push(aux.sprites.back_shiny);
      this.pokemonImg.push(aux.sprites.front_default);
      this.pokemonImg.push(aux.sprites.front_shiny);
      console.log(this.pokemonImg);
      if(aux.sprites.back_female != null){
        this.pokemonImg.push(aux.sprites.back_female);
        this.pokemonImg.push(aux.sprites.back_shiny_female);
        this.pokemonImg.push(aux.sprites.front_female);
        this.pokemonImg.push(aux.sprites.front_shiny_female);
      }

      this.pokemonMove[0] = aux.abilities[0].ability.name;
      this._pokemonServicesService.GetAbility(aux.abilities[0].ability.url).subscribe((aux)=>{
        console.log(aux);
        this.pokemonMove[1] = aux.effect_entries[0].short_effect;
      });

      if(aux.abilities[1] != null)
      {
        this.pokemonMove[2] = aux.abilities[1].ability.name;

        this._pokemonServicesService.GetAbility(aux.abilities[1].ability.url).subscribe((aux)=>{
          console.log(aux);
          this.pokemonMove[3] = aux.effect_entries[0].short_effect;
        });

      }else{
        this.pokemonMove[2] = 'NaN';
        this.pokemonMove[3] = 'NaN';
      }

      this.hidden = true;
    });
  }

}
