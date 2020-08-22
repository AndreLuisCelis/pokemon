import { ModalCardComponent } from './modal-card/modal-card.component';
import { ServiceService } from './../service.service';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { pipe } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  cards = [];

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getcards();

  }
  ngOnDestroy() {

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
      return 5;
    }
    if (tela >= 992) {
      return 4;
    }
    if (tela >= 768) {
      return 3;
    }
    if (tela >= 576) {
      return 2;
    }
    if (tela < 576) {
      return 1;
    }
  }
  openDialog(card) {
    const dialogRef = this.dialog.open(ModalCardComponent, {
      data: { card }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
