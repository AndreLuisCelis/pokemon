"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var modal_search_component_1 = require("./modal-search/modal-search.component");
var core_1 = require("@angular/core");
var layout_1 = require("@angular/cdk/layout");
var operators_1 = require("rxjs/operators");
var forms_1 = require("@angular/forms");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(breakpointObserver, dialog) {
        this.breakpointObserver = breakpointObserver;
        this.dialog = dialog;
        this.pesquisarPokemon = new forms_1.FormControl('');
        this.isHandset$ = this.breakpointObserver.observe(layout_1.Breakpoints.Handset)
            .pipe(operators_1.map(function (result) { return result.matches; }), operators_1.shareReplay());
    }
    HomeComponent.prototype.search = function () {
        if (this.pesquisarPokemon.valid) {
            var dialogRef = this.dialog.open(modal_search_component_1.ModalSearchComponent, {
                data: { name: this.pesquisarPokemon.value }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                // console.log('The dialog was closed');
            });
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
