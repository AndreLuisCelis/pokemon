import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.scss']
})
export class ModalCardComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private cdr: ChangeDetectorRef
  ) { }

  spiner = true;

  ngOnInit(): void {
    console.log(this.data);
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.spiner = !this.data.card.imageUrlHiRes;
      this.cdr.detectChanges();
    }, 2000);

  }

}
