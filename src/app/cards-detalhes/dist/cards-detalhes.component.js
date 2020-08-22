"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CardsDetalhesComponent = void 0;
var core_1 = require("@angular/core");
var CardsDetalhesComponent = /** @class */ (function () {
    function CardsDetalhesComponent(route) {
        this.route = route;
        this.cards = [];
    }
    CardsDetalhesComponent.prototype.ngOnInit = function () {
        this.getcards();
    };
    CardsDetalhesComponent.prototype.getcards = function () {
        var _this = this;
        this.route.data.subscribe(function (res) {
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
    CardsDetalhesComponent.prototype.getcoluns = function () {
        var tela = window.innerWidth;
        if (tela >= 1200) {
            return 2;
        }
        if (tela >= 992) {
            return 2;
        }
        if (tela >= 768) {
            return 2;
        }
        if (tela >= 576) {
            return 1;
        }
        if (tela < 576) {
            return 1;
        }
    };
    CardsDetalhesComponent = __decorate([
        core_1.Component({
            selector: 'app-cards-detalhes',
            templateUrl: './cards-detalhes.component.html',
            styleUrls: ['./cards-detalhes.component.scss']
        })
    ], CardsDetalhesComponent);
    return CardsDetalhesComponent;
}());
exports.CardsDetalhesComponent = CardsDetalhesComponent;
