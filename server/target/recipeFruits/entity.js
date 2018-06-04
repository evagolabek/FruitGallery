"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const BaseEntity_1 = require("typeorm/repository/BaseEntity");
const entity_1 = require("../recipes/entity");
const entity_2 = require("../fruits/entity");
let RecipeFruit = class RecipeFruit extends BaseEntity_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], RecipeFruit.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(_ => entity_2.default, fruit => fruit.recipeFruits),
    __metadata("design:type", entity_2.default)
], RecipeFruit.prototype, "fruit", void 0);
__decorate([
    typeorm_1.ManyToOne(_ => entity_1.default, recipe => recipe.recipeFruits),
    __metadata("design:type", entity_1.default)
], RecipeFruit.prototype, "recipe", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], RecipeFruit.prototype, "quantity", void 0);
RecipeFruit = __decorate([
    typeorm_1.Entity()
], RecipeFruit);
exports.default = RecipeFruit;
//# sourceMappingURL=entity.js.map