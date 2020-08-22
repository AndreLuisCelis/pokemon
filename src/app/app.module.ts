import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CardsComponent } from './cards/cards.component';
import { CardsDetalhesComponent } from './cards-detalhes/cards-detalhes.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalCardComponent } from './cards/modal-card/modal-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {  MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalSearchComponent } from './home/modal-search/modal-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardsComponent,
    CardsDetalhesComponent,
    ModalCardComponent,
    ModalSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatDialogModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
