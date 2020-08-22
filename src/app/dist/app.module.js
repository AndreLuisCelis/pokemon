"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var grid_list_1 = require("@angular/material/grid-list");
var card_1 = require("@angular/material/card");
var menu_1 = require("@angular/material/menu");
var icon_1 = require("@angular/material/icon");
var button_1 = require("@angular/material/button");
var layout_1 = require("@angular/cdk/layout");
var home_component_1 = require("./home/home.component");
var toolbar_1 = require("@angular/material/toolbar");
var sidenav_1 = require("@angular/material/sidenav");
var list_1 = require("@angular/material/list");
var cards_component_1 = require("./cards/cards.component");
var cards_detalhes_component_1 = require("./cards-detalhes/cards-detalhes.component");
var http_1 = require("@angular/common/http");
var modal_card_component_1 = require("./cards/modal-card/modal-card.component");
var dialog_1 = require("@angular/material/dialog");
var progress_bar_1 = require("@angular/material/progress-bar");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var forms_1 = require("@angular/forms");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                cards_component_1.CardsComponent,
                cards_detalhes_component_1.CardsDetalhesComponent,
                modal_card_component_1.ModalCardComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                ng_bootstrap_1.NgbModule,
                grid_list_1.MatGridListModule,
                card_1.MatCardModule,
                menu_1.MatMenuModule,
                icon_1.MatIconModule,
                button_1.MatButtonModule,
                layout_1.LayoutModule,
                toolbar_1.MatToolbarModule,
                sidenav_1.MatSidenavModule,
                list_1.MatListModule,
                http_1.HttpClientModule,
                dialog_1.MatDialogModule,
                progress_bar_1.MatProgressBarModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                forms_1.ReactiveFormsModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
