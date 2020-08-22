import { ServiceService } from './../../service.service';
import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-search',
  templateUrl: './modal-search.component.html',
  styleUrls: ['./modal-search.component.scss']
})
export class ModalSearchComponent implements OnInit , AfterViewInit {

  card: any;
  timeout = false;

  constructor(
    public dialogRef: MatDialogRef<ModalSearchComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private service: ServiceService
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.getSearchPokemon();
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.timeout = true;
    }, 5000);

  }

  getSearchPokemon(): void{
    this.service.searchCard(this.data.name).subscribe(res => {
      console.log(res);
      this.card = res.cards[0];
    }, err => {
      console.log(err);
    });
  }

}
