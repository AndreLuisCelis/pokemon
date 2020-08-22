import { Component, ViewEncapsulation } from '@angular/core';
import {  BreakpointObserver } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cards-detalhes',
  templateUrl: './cards-detalhes.component.html',
  styleUrls: ['./cards-detalhes.component.scss'],
  //  encapsulation: ViewEncapsulation.None
})
export class CardsDetalhesComponent {
  cards = [];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute,
    ) {}

    ngOnInit() {
      this.getcards();
    }

  getcards(): void {
    this.route.data.subscribe(res => {
      console.log('resposta', res);
      this.cards = res.card.cards;

      this.cards.sort((a, b) => {
        const nameA = a.name;
        const nameB = b.name;

        if (nameA < nameB){
          return -1;
        }
        if (nameA > nameB){
          return 1;
        }
        return 0;
      });
    });
  }
  getcoluns(): number {
    const tela = window.innerWidth;
    if (tela >= 1200) {
      return 2;
    }
    if (tela >= 992) {
      return 2;
    }
    if (tela >= 768) {
      return 2;
    }
    if (tela >= 576) {
      return 1;
    }
    if (tela < 576) {
      return 1;
    }
  }
}

