import { DetalleComponent } from './components/detalle/detalle.component';
import { ListadoComponent } from './components/listado/listado.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
  path : '',
  redirectTo : 'listado',
  pathMatch : 'full'
},
{
  path:'listado',
  component:ListadoComponent

},
{
  path : ":listado/detalle/:pokemon",
  component : DetalleComponent,
},
{
  path:'**',
  component:NotFoundComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
