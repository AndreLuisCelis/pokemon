import { ModalCardComponent } from './modal-card/modal-card.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit , OnDestroy{
  cards = [];
  subs: Subscription;

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit(): void{
    this.getcards();
  }
  getcards(): void {
    this.subs = this.route.data.subscribe(res => {
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
  openDialog(card): void {
    const dialogRef = this.dialog.open(ModalCardComponent, {
      data: { card }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  ngOnDestroy(): void {
    if (this.subs){
      this.subs.unsubscribe();
    }
  }
}
