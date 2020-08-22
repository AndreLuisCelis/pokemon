"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ServiceService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var ServiceService = /** @class */ (function () {
    function ServiceService(http) {
        this.http = http;
        this.url = 'https://api.pokemontcg.io/v1/cards';
    }
    ServiceService.prototype.getcards = function () {
        return this.http.get(this.url)
            .pipe(operators_1.retry(2), operators_1.catchError(this.handleError));
    };
    ServiceService.prototype.searchCard = function (name) {
        return this.http.get(this.url + "?name=" + name)
            .pipe(operators_1.retry(2), operators_1.catchError(this.handleError));
    };
    ServiceService.prototype.handleError = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Erro ocorreu no lado do client
            errorMessage = error.error.message;
        }
        else {
            // Erro ocorreu no lado do servidor
            errorMessage = "C\u00F3digo do erro: " + error.status + ", " + ("menssagem: " + error.message);
        }
        console.log(errorMessage);
        return rxjs_1.throwError(errorMessage);
    };
    ServiceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ServiceService);
    return ServiceService;
}());
exports.ServiceService = ServiceService;
