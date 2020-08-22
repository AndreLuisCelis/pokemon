import { ServiceService } from './../../service.service';
import { Component, OnInit, Inject, AfterViewInit, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal-search',
  templateUrl: './modal-search.component.html',
  styleUrls: ['./modal-search.component.scss']
})
export class ModalSearchComponent implements OnInit , AfterViewInit , OnDestroy {

  card: any;
  timeout = false;
  subs: Subscription;

  constructor(
    public dialogRef: MatDialogRef<ModalSearchComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private service: ServiceService
  ) { }

  ngOnInit(): void {
    this.getSearchPokemon();
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.timeout = true;
    }, 5000);

  }
  getSearchPokemon(): void{
    this.subs = this.service.searchCard(this.data.name).subscribe(res => {
      this.card = res.cards[0];
    }, err => {
    });
  }
  ngOnDestroy(): any {
    if (this.subs){
      this.subs.unsubscribe();
    }
  }

}
