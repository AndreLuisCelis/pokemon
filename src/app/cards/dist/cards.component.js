"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CardsComponent = void 0;
var modal_card_component_1 = require("./modal-card/modal-card.component");
var core_1 = require("@angular/core");
var CardsComponent = /** @class */ (function () {
    function CardsComponent(route, dialog) {
        this.route = route;
        this.dialog = dialog;
        this.cards = [];
    }
    CardsComponent.prototype.ngOnInit = function () {
        this.getcards();
    };
    CardsComponent.prototype.ngOnDestroy = function () {
    };
    CardsComponent.prototype.getcards = function () {
        var _this = this;
        this.route.data.subscribe(function (res) {
            console.log('resposta', res);
            _this.cards = res.card.cards;
            _this.cards.sort(function (a, b) {
                var nameA = a.name;
                var nameB = b.name;
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
        });
    };
    CardsComponent.prototype.getcoluns = function () {
        var tela = window.innerWidth;
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
    };
    CardsComponent.prototype.openDialog = function (card) {
        var dialogRef = this.dialog.open(modal_card_component_1.ModalCardComponent, {
            data: { card: card }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    CardsComponent = __decorate([
        core_1.Component({
            selector: 'app-cards',
            templateUrl: './cards.component.html',
            styleUrls: ['./cards.component.scss']
        })
    ], CardsComponent);
    return CardsComponent;
}());
exports.CardsComponent = CardsComponent;
