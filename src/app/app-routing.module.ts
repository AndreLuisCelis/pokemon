import { CardsDetalhesComponent } from './cards-detalhes/cards-detalhes.component';
import { CardsComponent } from './cards/cards.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardsResolve} from './resolve/cards.resolve';

const routes: Routes = [
  {path: '', component : CardsComponent, resolve: {card : CardsResolve}},
  {path: 'cardDetalhes', component : CardsDetalhesComponent, resolve: {card : CardsResolve }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
