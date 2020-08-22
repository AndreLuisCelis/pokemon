"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.ModalSearchComponent = void 0;
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var ModalSearchComponent = /** @class */ (function () {
    function ModalSearchComponent(dialogRef, data, service) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.service = service;
        this.timeout = false;
    }
    ModalSearchComponent.prototype.ngOnInit = function () {
        console.log(this.data);
        this.getSearchPokemon();
    };
    ModalSearchComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.timeout = true;
        }, 5000);
    };
    ModalSearchComponent.prototype.getSearchPokemon = function () {
        var _this = this;
        this.service.searchCard(this.data.name).subscribe(function (res) {
            console.log(res);
            _this.card = res.cards[0];
        }, function (err) {
            console.log(err);
        });
    };
    ModalSearchComponent = __decorate([
        core_1.Component({
            selector: 'app-modal-search',
            templateUrl: './modal-search.component.html',
            styleUrls: ['./modal-search.component.scss']
        }),
        __param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], ModalSearchComponent);
    return ModalSearchComponent;
}());
exports.ModalSearchComponent = ModalSearchComponent;
