import { ModalSearchComponent } from './modal-search/modal-search.component';
import { ServiceService } from './../service.service';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  pesquisarPokemon = new FormControl('');

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog) {}

  search(): void {
    if (this.pesquisarPokemon.valid){
      const dialogRef = this.dialog.open(ModalSearchComponent, {
        data: {name: this.pesquisarPokemon.value}
      });

      dialogRef.afterClosed().subscribe(result => {
        // console.log('The dialog was closed');
      });
    }
  }

}
